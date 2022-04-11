import { useEffect, useRef, useState } from 'react';
import { Styles } from "./profileStyle";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import RemoveButton from './txtButton';
import CustomedInput from '../input';
import CustomedTextArea from '../textArea';
import { Grid } from '@mui/material';

const UploadButton = withStyles((theme) => ({
    root: {
        border: 'none',
        color: `var(--ocean-blue-pearl) !important`,
        fontFamily: `var(--font-family-open_sans) !important`,
        fontSize: `var(--font-size-17) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '45px !important',
        width: '155px !important',
        marginBottom: '0.78px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        backgroundColor: 'rgba(85, 66, 246, 0.1)',
        [`@media screen and (max-width: 650px)`]: {
            width: '150px !important',
            fontSize: `var(--font-size-16) !important`,
        },
       
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--purple) !important`,
        },
    },
}))(Button);

export default function Profile({ setProfile, profile }){

    const [userAvatarPath, setUserAvatarPath] = useState(profile?.userAvatarPath);
    const [userAvatar, setUserAvatar] = useState(profile?.userAvatar);
    const [firstName, setFirstName] = useState(profile?.firstName);
    const [lastName, setLastName] = useState(profile?.lastName);
    const [location, setLocation] = useState(profile?.location);
    const [shortBio, setShortBio] = useState(profile?.shortBio);

    const uploadRef = useRef();

    useEffect(() => {
        setProfile({ userAvatar, userAvatarPath, firstName, lastName, location, shortBio});
    }, [firstName, lastName, location, setProfile, shortBio, userAvatar, userAvatarPath])
    
    // useEffect(() => {
    //     if(userAvatar && userAvatarPath && firstName && lastName && location && shortBio)
    //         setIsFulled(true);
    //     else
    //         setIsFulled(false);
    // }, [firstName, lastName, location, setIsFulled, shortBio, userAvatar, userAvatarPath])
    return (
        <Styles>
            <div className="edit-profile-container">
                <div className="edit-header">
                    <div className="edit-avatar">
                        {userAvatarPath &&
                            <img
                                className='avatar-size'
                                alt="" 
                                src={userAvatarPath} 
                            />
                        }
                    </div>
                    <UploadButton onClick={() => uploadRef.current.click()}>
                        Upload picture
                    </UploadButton>
                    <input
                        ref={uploadRef}
                        type="file"
                        hidden
                        onChange={(event) => {
                            setUserAvatarPath(URL.createObjectURL(event.target.files[0]));
                            setUserAvatar(event.target.files[0]);
                        }}
                    />
                    <RemoveButton 
                        text={"Remove"}
                        onClick={()=>{
                            setUserAvatarPath(null);
                            setUserAvatar(null);
                        }}
                    />
                </div>
                <div className="edit-body">
                    <div className='edit-info'>Account Information</div>
                    <Grid container spacing={2} className='edit-name'>
                        <Grid item xs={6}>
                            <CustomedInput
                                label='First name*'
                                inputValue={firstName}
                                inputHandler={setFirstName}
                                placeholderName="Your first name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomedInput
                                label='Last name'
                                inputValue={lastName}
                                inputHandler={setLastName}
                                placeholderName="Your last name"
                            />
                        </Grid>
                    </Grid>
                    <CustomedInput
                        label='Location'
                        inputValue={location}
                        inputHandler={setLocation}
                        placeholderName="Your location"
                    />
                    <CustomedTextArea
                        label='Short Bio'
                        inputValue={shortBio}
                        inputHandler={setShortBio}
                        placeholderName=""
                    />
                </div>
            </div>
        </Styles>
    )
}