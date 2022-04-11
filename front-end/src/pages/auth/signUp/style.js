import styled from 'styled-components';
import { 
    PptelegrafRegularNormalBlack12px, 
    PptelegrafRegularNormalGray11px, 
    PptelegrafUltraBoldBlack20px,
    PptelegrafRegularUltrabold36px,
    PptelegrafRegularNormalBlack14px,
    PptelegrafRegularNormalBlack20px,
    PptelegrafRegularNormalBlack17px
} from '../../../assets/styledMixins';
export const Styles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .sign-up-container{
        background-color: var(--white);
        position: relative;
        border-radius: 24px;
        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
        .mobile-cover{
            @media screen and (max-width: 650px) {
                height: 748px !important;
            }
        }
        .out-body{
            width: 866px;
            height: 859px;
            box-sizing: border-box;
            padding: 90px 74px 90px 74px;
            @media screen and (max-width: 800px) {
                width: 673px;
                height: 783px;
                padding: 89px 32px 34px 32px;
            }
            @media screen and (max-width: 600px) {
                width: 328px;
                height: 718px;
                padding: 73px 20px 20px 20px;
            }
            .inside-body{
                width: 100%;
                height: 100%;
                border: 1px solid var(--gray-nurse);
                border-radius: 24px;
                .btn-group{
                    display: flex;

                }
                
                .main{
                    position: relative;
                    padding: 65px 95px 0px 95px;
                    .mt-55{
                        padding-top: 0px;
                        @media screen and (max-width: 650px) {
                            padding-top: 32px;
                        }
                    }
                    .social-group{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .icon{
                            margin-right: 8px;
                        }
                        .ml-16{
                            margin-left: 16px;
                            @media screen and (max-width: 650px) {
                                margin-left: 0px;
                            }
                        }
                        @media screen and (max-width: 600px) {
                            flex-direction: column;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        padding: 13px 16px 0px 16px;
                    }
                    .input-group{
                        .password-alarm{
                            ${PptelegrafRegularNormalGray11px}
                            padding-top: 5px;
                        }
                        .warning{
                            color: var(--warnig);
                        }
                    }
                    .alert{
                        position: absolute;
                        top: 19px;
                        left: calc((100% - 425px) / 2);
                        .alert-content{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            ${PptelegrafRegularNormalBlack12px}
                            width: 425px;
                            height: 23px;
                            background-color: #FF7373;
                            border-radius: 100px;
                            @media screen and (max-width: 600px) {
                                width: 256px;
                                height: 23px;
                            }
                        }
                        @media screen and (max-width: 600px) {
                            top: 16px;
                            left: calc((100% - 256px) / 2);
                        }
                    }
                }
                .alarm{
                    padding-top: 12px;
                    text-align: center;
                    ${PptelegrafRegularNormalBlack14px}
                    @media screen and (max-width: 600px) {
                        margin-top: 16px;
                    }
                }
            }
        }
    }
    .close-btn{
        position: absolute;
        top: 13px;
        left: 13px;
        .icon{
            width: 24px;
            height: 24px;
            @media screen and (max-width: 600px) {
                width: 15px;
                height: 15px;
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

export const ViewCollectionDlgStyle = styled.div`
    margin: 0px;
    position: relative;
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
            height: 598px;
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
                @media screen and (max-width: 800px) {
                    padding-top: 32px;
                }
                @media screen and (max-width: 600px) {
                    padding: 8px 15px 0px 15px;
                    width: 259px;
                    ${PptelegrafUltraBoldBlack20px}
                }
            }
            .second-header{
                ${PptelegrafRegularUltrabold36px}
                padding-top: 32px;
                min-height: 36px;
                min-width: 243px;
                text-align: center;
                letter-spacing: 0;
                line-height: 36px;
                @media screen and (max-width: 800px) {
                    padding-top: 32px;
                }
                @media screen and (max-width: 600px) {
                    padding: 8px 15px 0px 15px;
                    width: 259px;
                    ${PptelegrafUltraBoldBlack20px}
                }
            }
            .body{
                display: flex;
                flex-direction: column;
                align-items: center;
                .des-txt{
                    ${PptelegrafRegularNormalBlack20px}
                    min-height: 87px;
                    text-align: center;
                    letter-spacing: 0;
                    line-height: 29px;
                    padding: 24px 64px 0px 64px;
                    @media screen and (max-width: 800px) {
                        ${PptelegrafRegularNormalBlack17px}
                    }
                    @media screen and (max-width: 700px) {
                        width: 279px;
                        padding-top: 12px;
                    }
                }
                .pt-28{
                    padding-top: 28px;
                }
                .picture{
                    width: 215px;
                    height: 265px;
                    padding-bottom: 32px;
                    @media screen and (max-width: 700px) {
                        width: 279px;
                        padding-bottom: 12px;
                        padding-top: 6px;
                    }
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
`;