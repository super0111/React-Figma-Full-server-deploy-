const Users = require('../model/Users');
const multer = require('multer');
const path = require('path');
let fs = require('fs-extra');
const jwt = require("jsonwebtoken");
var request = require("request");

const hashToken = async (params) => {
    const token = await jwt.sign(
      {
        rand: params.random,
        email: params.email,
        token: params.token
      },
      process.env.SECRET_JWT,
      {
        expiresIn: "1h",
        algorithm: "HS256",
      }
    );
    return token;
};

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log(__dirname);
        fs.mkdirsSync(__dirname + '/uploads/images');
        cb(null, 'uploads/images');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const getUserInfoById = async (req, res) => {
    const { id } = req.query;
    const user = await Users.find({_id: id});
    if(user){
        return res.send({
            user: user,
        });
    }else{
        return res.send({
            status: 'error',
            user: [],
        });
    }
}

const uploadAvatar = async (req, res) => {
    let upload = multer({ storage: storage}).single('Users_pic');
    try{
        upload(req, res, function(err) {
            const file = req?.files?.image;
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (!file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }
            const filePath = '/uploads/avatars/' + Date.now() + file.name;
            file.mv('./public' + filePath);
    
            res.send({
                status: 'ok',
                filePath: filePath
            });
        });
    }catch(error){
        return res.send(error);
    }
    
}

const signUpWithEmail = async (req, res) => {
    const {
        userEmail,
        password,
    } = req.body;
    const oldUser = await Users.find({email: userEmail});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newUsers = new Users({
        email: userEmail,
        password: password,
        type: 0,
        isActive: false,
    })

    const savedUser = await newUsers.save();

    return res.send({
        status: 'ok',
        data: savedUser
    });
}

const signUpWithGoogle = async(req, res) => {
    const { email } = req.body;
    const oldUser = await Users.find({email: email});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newUsers = new Users({
        email: email,
        password: '123456',
        isGoogle: true,
        type: 0,
        isActive: false,
    })

    const savedUser = await newUsers.save();

    return res.send({
        status: 'ok',
        data: savedUser
    });
}

const signUpWithFacebook = async(req, res) => {
    const { email, name } = req.body;
    const oldUser = await Users.find({email: email});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newUsers = new Users({
        userName: name,
        email: email,
        password: '123456',
        isFacebook: true,
        type: 0,
        isActive: false,
    })

    const savedUser = await newUsers.save();

    return res.send({
        status: 'ok',
        data: savedUser
    });
}


const signInWithEmail = async (req, res) => {
    const {
        userEmail,
        password,
    } = req.body;
    const users = await Users.find({email: userEmail});
    const user = users[0];
    if(user){
        if(password === user.password){
            return res.send({
                status: 'ok',
                userInfo: user
            })
        }else{
            return res.send({
                status: 'error',
                message: 'passwrod not matched'
            })
        }
    }else{
        return res.send({
            status: 'error',
            message: 'User is not existed'
        });
    }
}

const signInWithGoogle = async (req, res) => {
    const {
        email,
    } = req.body;
    const users = await Users.find({email: email});
    const user = users[0];
    if(user){
        return res.send({
            status: 'ok',
            userInfo: user
        })
    }else{
        return res.send({
            status: 'error',
            message: 'User is not existed'
        });
    }
}

const signInWithFacebook = async (req, res) => {
    const {
        email,
        password,
    } = req.body;
    const users = await Users.find({email: email});
    const user = users[0];
    if(user){
        return res.send({
            status: 'ok',
            userInfo: user
        })
    }else{
        return res.send({
            status: 'error',
            message: 'User is not existed'
        });
    }
}


const upDateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        avatarPath: avatarPath, 
        userName: userName,
        location: location,
        shortBio: shortBio,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.avatarPath = avatarPath;
    user.userName = userName;
    user.location = location;
    user.shortBio = shortBio;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateAccountSetting = async (req, res) => {
    const { id } = req.params;
    const {
        userName: userName,
        userEmail: userEmail,
        password: password,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    if(user.password !== password){
        return res.send({
            status: 'error',
            error: 'password incorrect'
        })
    }

    user.updatedAt = Date.now();
    user.userName = userName;
    user.email = userEmail;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDatePassword = async (req, res) => {
    const { id } = req.params;
    const {
        oldPassword: oldPassword,
        newPassword: newPassword,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    if(user.password !== oldPassword){
        return res.send({
            status: 'error',
            error: 'password incorrect'
        })
    }

    user.updatedAt = Date.now();
    user.password = newPassword;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateSocialProfile = async (req, res) => {
    const { id } = req.params;
    const {
        twitter: twitter, 
        instagram: instagram, 
        dribbble: dribbble, 
        behance: behance,
        isGoogle: isGoogle,
        isFacebook: isFacebook
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.twitter = twitter;
    user.instagram = instagram;
    user.dribbble = dribbble;
    user.behance = behance;
    user.isGoogle = isGoogle;
    user.isFacebook = isFacebook;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateEmailNotification = async (req, res) => {
    const { id } = req.params;
    const {
        emailNotification: emailNotification, 
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.emailNotification = emailNotification;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const Sendblue = async (email, link) => {
    var options = {
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': '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'
        },
        body: {
          sender: {name: 'fedir', email: 'fedirpiddu@outlook.com'},
          to: [{email: email}],
          subject: 'Forgot your password? It happends to the bet of us.',
          htmlContent: `
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8" />
                      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Document</title>
                      <style>
                      .container {
                          margin-left: auto;
                          margin-right: auto;
                          width: 100%;
                          max-width: 700px;
                          line-height: 1.8rem;
                          font: small/ 1.5 Arial, Helvetica, sans-serif;
                          padding: 10px 20px;
                          border: solid 1px #d5d0d0;
                          border-radius: 10px;
                          font-size: 15px;
                          color: black;
                      }
                      .btn {
                          display: inline-block;
                          font-weight: 400;
                          line-height: 1.5;
                          color: #212529;
                          text-align: center;
                          text-decoration: none;
                          vertical-align: middle;
                          cursor: pointer;
                          -webkit-user-select: none;
                          -moz-user-select: none;
                          user-select: none;
                          background-color: transparent;
                          border: 1px solid transparent;
                          padding: 0.375rem 0.75rem;
                          font-size: 1rem;
                          border-radius: 0.25rem;
                          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                          color: #fff;
                          background-color: #0d6efd;
                          border-color: #0d6efd;
                      }
                      table {
                          width: 100%;
                      }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                      <table>
                          <tbody>
                          </tbody>
                      </table>
                      <table>
                          <tbody>
                          <tr>
                              <td>
                              <h2 style="text-align: center">Dear toptopdesign User</h2>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  We have received your request to reset your password.
                              </td>
                          </tr>
                          <tr>
                              <td>Please click the link below to complete the reset:</td>
                          </tr>
                          <tr>
                              <td style="text-align: center">
                              <a
                                  href="${link}"
                                  class="btn"
                                  style="margin-top: 1.2rem; margin-bottom: 1.2rem; color: white;"
                                  >Reset password</a
                              >
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      </div>
                  </body>
                  </html>
                  `,
        },
        json: true
      };
      
      await request(options, function (error, response, body) {
          console.log(body);
      });
};

const forgetsendmail = async (req, res) => {
    const { email } = req.body;
    const result = await Users.find({ email: email });
    const user = result[0];
    if (!user) {
        return res.send({
            status: 'error',
            message: 'user is not existed'
        })
    }

    let random = Math.floor(Math.random() * 100 + 54);
    const newPassword = 'user12345';
    const token = await hashToken({ random, email, token: '' });
    const link = process.env.CLIENTURL + `/reset/password/${token}/${newPassword}`;

    await Sendblue(email, link);
    user.resetcode = token;
    user.password = newPassword;
    const saved = await user.save();
    return res.send({
        status: 'ok',
        user: saved
    })
};

const resetPassword = async(req, res) => {
    const { token, password } = req.body;
    const result = await Users.find({ resetcode: token });
    if(result[0].password === password){
        return res.send({
            status: 'ok',
            userInfo: result[0],
        })
    }else{
        return res.send({
            status: 'error',
            message: 'password not match',
        })
    }
}

const getTotalUserCount = async(req, res) => {
    const counts = await Users.find({}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    });
}

const getYearlyUsers = async(req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 30);
    const counts = await Users.find({createdDate: {$gte: firstDay, $lt: lastDay}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getMonthlyUsers = async(req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const counts = await Users.find({createdDate: {$gte: firstDay, $lt: lastDay}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getDailyUsers = async(req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,999);
    const counts = await Users.find({createdDate: {$gte: start, $lt: end}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getTopUsers = async (req, res) => {
    const query = {};
    const sort = { createdDate: 1 };
    const limit = 6;
    const topUsers = await Users.find(query).sort(sort).limit(limit);
    return res.send({
        status: 'ok',
        users: topUsers,
    });
}

const getAllUsers = async (req, res) => {
    const query = {};
    const sort = { createdDate: 1 };
    const users = await Users.find(query).sort(sort);
    // return res.send({
    //     status: 'ok',
    //     users: users,
    // });
    res.status(200).json(users);
}

const deleteUsers = async(req, res) => {
    await Users.deleteMany({});
}

const getNewUsers = async(req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const users = await Users.find({createdDate: {$gte: firstDay, $lt: lastDay}});
    res.status(200).json(users);
}

const getActiveUsers = async (req, res) => {
    const query = { isActive: true };
    const sort = { createdDate: 1 };
    const users = await Users.find(query).sort(sort);
    res.status(200).json(users);
}

const getSuspendedUsers = async (req, res) => {
    const query = { isActive: false };
    const sort = { createdDate: 1 };
    const users = await Users.find(query).sort(sort);
    res.status(200).json(users);
}

const suspendById = async (req, res) => {
    const { id } = req.body;
    const users = await Users.find({_id: id});
    if(users && users.length > 0){
        const user = users[0];
        user.isActive = false;
        const savedUser = await user.save()
        res.status(200).json(savedUser);
    }else{
        res.status(404).json('dont exist');
    }
}

const unSuspendById = async (req, res) => {
    const { id } = req.body;
    const users = await Users.find({_id: id});
    if(users && users.length > 0){
        const user = users[0];
        user.isActive = true;
        const savedUser = await user.save()
        res.status(200).json(savedUser);
    }else{
        res.status(404).json('dont exist');
    }
}
module.exports = {
    getUserInfoById,
    uploadAvatar,
    signUpWithEmail,
    signUpWithGoogle,
    signUpWithFacebook,
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    upDateProfile,
    upDateAccountSetting,
    upDatePassword,
    upDateSocialProfile,
    upDateEmailNotification,
    forgetsendmail,
    resetPassword,
    getYearlyUsers,
    getMonthlyUsers,
    getDailyUsers,
    getTotalUserCount,
    getTopUsers,
    getAllUsers,
    deleteUsers,
    getNewUsers,
    getActiveUsers,
    getSuspendedUsers,
    suspendById,
    unSuspendById
};
  