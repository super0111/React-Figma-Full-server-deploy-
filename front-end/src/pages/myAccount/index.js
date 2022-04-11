import { useEffect, useState, useContext, useCallback } from "react";
import { Styles } from "./myAccountStyle";
import { profileBtns } from "../../assets/config";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { getUserInfoById } from "../../api/account";

const EditButton = withStyles((theme) => ({
    root: {
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-17) !important`,
        fontWeight: '400px !important',
        fontStyle: 'normal !important',
        height: '18px !important',
        minWidth: (props) => props.width,
        marginBottom: '0.78px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        cursor: 'pointer !important',

        [`@media screen and (max-width: 650px)`]: {
            width: '100% !important',
            height: '36px !important',
            padding: '0px !important',
        },
        [`@media screen and (max-width: 900px)`]: {
            marginRight: '0px !important',
            marginTop: '10px !important',
        },
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            backgroundColor:  `var(--white) !important`,
            fontFamily: `var(--font-family-pp_telegraf-ultrabold) !important`,
            fontWeight: '800px !important',
            textDecorationLine: 'underline !important',
        },
    },
}))(Button);

export default function MyAccount({children}){
    const navigate = useNavigate();
    const [userName, setUserName] = useState('username');
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        const urlParams = window.location.href.split("/").pop()
        profileBtns.forEach((item) => {
            if(item.path === urlParams){
                setCurrentPage(item.name);
            }
        }) 
    }, [children]);
    const goToOthers = (path) => {
        navigate(`/myaccount/${path}`);
    }

    const getInitialData = useCallback(async() => {
        try{
            const auth = JSON.parse(localStorage.getItem('auth'));
            if(!auth || Object.keys(auth).length === 0){
                navigate('/');
                return;
            }
            const res = await getUserInfoById(auth._id);
            const user = res.user[0];
            localStorage.setItem('auth', JSON.stringify(user));
            setUserName(user.userName);
        }catch(err){
            console.log(err);
        }
        
    }, [])

    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    // useEffect(() => {
    //     if(userInfo)
    // }, [])
    return (
        <Styles>
            <div className="myaccount-before-container">
                <div className="myaccount-container">
                    <div className="myaccount-header">
                        <div className="header-avatar">
                            
                        </div>
                        <div className="header-content">
                            <span className="user-name">
                                {`[${userName}] / `}
                            </span>
                            <span className="profile-name">
                                {currentPage}
                            </span>
                        </div>
                    </div>
                    <div className="myaccount-content">
                        {profileBtns && profileBtns.map((item, idx) => {
                            return (
                                <EditButton
                                    className={idx === 0?'':'mr-30'}
                                    key={idx} 
                                    width={item.size}
                                    onClick={() => goToOthers(item.path)}
                                >
                                    <span className={currentPage===item.name?'active-item':''}>{item.name}</span>
                                </EditButton>
                            )
                        })}
                    </div>
                    <div className="myaccount-body">
                        {(currentPage !== 'Message') && children}
                    </div>
                    <div className="myaccount-message">
                        {(currentPage === 'Message') && children}
                    </div>
                </div>
            </div>
            <Footer />
        </Styles>
    )
}