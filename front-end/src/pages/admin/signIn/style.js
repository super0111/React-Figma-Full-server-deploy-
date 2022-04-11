import styled from "styled-components";
import {
    ManropeNormalCharade14px,
    ManropeNormalCharade36px,
    PptelegrafRegularNormalBlack12px,
    PptelegrafRegularUltrabold36px,
    PptelegrafUltraBoldBlack20px,
    PptelegrafRegularNormalBlack20px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    display: flex;
    justify-content: center;
    .sign-in-container{
        width: 1440px;
        height: 900px;
        display: flex;
        flex-direction: row;
        .logo{
            width: 735px;
            height: 900px;
        }
        .panel{
            padding: 260px 151px 260px 97px;
            .header{
                display: flex;
                flex-direction: column;
                .type{
                    ${ManropeNormalCharade36px}
                }
                .account{
                    margin-top: 12px;
                    .user{
                        ${ManropeNormalCharade14px}
                        color: var(--charade);
                    }
                    .create{
                        ${ManropeNormalCharade14px}
                        color: var(--ocean-blue-pearl);
                        padding-left: 4px;
                        cursor: pointer;
                    }
                }
            }
            .form-group{
                width: 385px;
                margin-top: 15px;
                .name-group{
                    display: flex;
                }
                .form-footer{
                    margin-top: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
`;


export const ForgotStyle = styled.div`
    margin: 0px;
    position: relative;
    .small-dlg{
        height: 592px !important;
    }
    .dialog-container{
        height: 622px;
        width: 718px;
        padding: 70px 75px 70px 73px;
        overflow: hidden;
        border-radius: 24px;
        background-color: white;
        
        @media screen and (max-width: 1000px) {
            width: 690px;
        }
        @media screen and (max-width: 900px) {
            width: 650px;
        }
        @media screen and (max-width: 950px) {
            width: 600px;
        }
        @media screen and (max-width: 800px) {
            padding: 32px;
            width: 609px;
            height: 611px;
        }
        @media screen and (max-width: 750px) {
            width: 500px;
            height: 598px;
            padding: 20px 12px;
        }
        @media screen and (max-width: 650px) {
            width: 400px;
        }
        @media screen and (max-width: 600px) {
            width: 306px;
            height: 404px;
            padding: 20px 12px;
        }
        
        .content{
            width: 100%;
            height: 100%;
            border: 1px solid var(--mist-gray);
            border-radius: 24px;
            .header{
                ${PptelegrafRegularUltrabold36px}
                padding-top: 67px;
                min-height: 36px;
                min-width: 243px;
                text-align: center;
                letter-spacing: 0;
                line-height: 36px;
                white-space: nowrap;
                @media screen and (max-width: 800px) {
                    padding-top: 60px;
                }
                @media screen and (max-width: 600px) {
                    padding-top: 31px;
                    ${PptelegrafUltraBoldBlack20px}
                }
            }
            .body{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 40px 94px 234px 96px;
                .des-txt{
                    padding-bottom: 30px;
                    text-align: center;
                    ${PptelegrafRegularNormalBlack20px}
                }
                @media screen and (max-width: 600px) {
                    padding: 20px 10px 57px 10px;
                }
            }
            .footer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                @media screen and (max-width: 600px) {
                    padding: 0px 10px;
                }
            }
        }
    }
    .email-alert{
        position: absolute;
        top: 88px;
        left: calc((100% - 658px) / 2);
        .alert-content{
            display: flex;
            align-items: center;
            justify-content: center;
            ${PptelegrafRegularNormalBlack12px}
            width: 658px;
            height: 23px;
            background-color: #FF7373;
            border-radius: 100px;
            @media screen and (max-width: 800px) {
                width: 492px;
                height: 23px;
            }
            @media screen and (max-width: 600px) {
                width: 256px;
                height: 28px;
            }
        }
        @media screen and (max-width: 800px) {
            top: 45px;
            left: calc((100% - 492px) / 2);
        }
        @media screen and (max-width: 600px) {
            text-align: center;
            top: 26px;
            left: calc((100% - 256px) / 2);
        }
    }
`;