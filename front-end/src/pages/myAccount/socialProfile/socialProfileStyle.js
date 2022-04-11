import styled from 'styled-components';
import {
    PptelegrafRegularUltrabold36px,
    PptelegrafUltraBoldBlack20px,
    PptelegrafRegularNormalBlack20px,
    PptelegrafRegularNormalBlack17px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    .social-profile-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .social-header{
            display: flex;
            align-items: center;
            .social-avatar{
                width: 89px;
                height: 89px;
                background-color: var(--mist-gray);
                border-radius: 89px;
                margin-right: 32px;
            }
        }
        .social-body{
            .social-login{
                display: flex;
                align-items: center;
                justify-content: center;
                @media screen and (max-width: 600px) {
                    flex-direction: column;
                }
                .ml-20{
                    margin-left: 20px;
                    @media screen and (max-width: 650px) {
                        margin-left: 0px;
                    }
                }
            }
        }
        .social-footer{
            padding-top: 40px;
        }
    }
    .alert{
        position: absolute;
        top: 15px;
        left: calc((100% - 441px) / 2);
        .profile-success{
            width: 441px;
            height: 29px;
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
        overflow-x: hidden;
        overflow-y: auto;
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

export const ConfirmDlgStyle = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 622px;
        width: 718px;
        padding: 70px 75px 70px 73px;
        overflow-x: hidden;
        overflow-y: auto;
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
                .picture{
                    padding-top: 78px;
                    width: 215px;
                    height: 265px;
                    padding-bottom: 69px;
                    @media screen and (max-width: 800px) {
                        padding: 90px 0px 41px 0px;
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