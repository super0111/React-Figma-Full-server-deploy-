import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Navbar from '../components/navbar/navbar';
import Collection from "../pages/collection";
import AllCollections from "../pages/collection/components/allCollection";
import DetailCollection from "../pages/collection/components/detailCollection";
import MyAccount from "../pages/myAccount";
import EditProfile from "../pages/myAccount/editProfile";
import AccountSetting from '../pages/myAccount/accountSetting';
import Password from "../pages/myAccount/password";
import SocialProfile from "../pages/myAccount/socialProfile";
import EmailNotification from "../pages/myAccount/emailNotification";
import Message from "../pages/myAccount/message";
import OverView from "../pages/admin/overView";
import Admin from "../pages/admin";
import AllUsers from "../pages/admin/users/allUsers";
import AdminSignIn from "../pages/admin/signIn";
import AdminSignUp from '../pages/admin/signUp';
import UserAccount from "../pages/admin/users/userAccount";
import EditUserAccount from '../pages/admin/users/editUserAccount';

const Routers = () => {

  return (
    <Router>
        <Navbar />
        <Routes>
          {/* User panel */}
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/reset/password/:id/:password" element={
              <MyAccount>
                <Password />
              </MyAccount>
            } />
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/collection" element={
              <Collection>
                <AllCollections />
              </Collection>
            }/>
            <Route exact path="/collection/:id" element={
              <Collection>
                <DetailCollection />
              </Collection>
            }/>
            <Route exact path="/myaccount/edit" element={
              <MyAccount>
                <EditProfile />
              </MyAccount>
            }/>
            <Route exact path="/myaccount/accountsetting" element={
              <MyAccount>
                <AccountSetting />
              </MyAccount>
            }/>
            <Route exact path="/myaccount/password" element={
              <MyAccount>
                <Password />
              </MyAccount>
            }/>
            <Route exact path="/myaccount/socialprofile" element={
              <MyAccount>
                <SocialProfile />
              </MyAccount>
            }/>
            <Route exact path="/myaccount/emailnotification" element={
              <MyAccount>
                <EmailNotification />
              </MyAccount>
            }/>
            <Route exact path="/myaccount/message" element={
              <MyAccount>
                <Message />
              </MyAccount>
            }/>
            {/* Admin panel */}
            <Route exact path="/admin/signin" element={<AdminSignIn/>}/>
            <Route exact path="/admin/signup" element={<AdminSignUp/>}/>
            <Route exact path="/admin/overview" element={
                <Admin>
                  <OverView />
                </Admin>
            }/>
            <Route exact path="/admin/products/all" element={
                <Admin>
                  <UserAccount>
                    <AllUsers />
                  </UserAccount>
                </Admin>
            }/>
            <Route exact path="/admin/users/" element={
                <Admin>
                  <AllUsers>
                  </AllUsers>
                </Admin>
            }/>
            <Route exact path="/admin/users/add" element={
                <Admin>
                  <UserAccount>
                  </UserAccount>
                </Admin>
            }/>
            <Route exact path="/admin/users/detail/:id" element={
                <Admin>
                  <EditUserAccount />
                </Admin>
            }/>
            <Route exact path="/admin/collections" element={
                <Admin>
                  <UserAccount>
                  </UserAccount>
                </Admin>
            }/>
        </Routes>
    </Router>
  )
}
export default Routers
