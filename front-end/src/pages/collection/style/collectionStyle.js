import styled from 'styled-components';
import {
    PptelegrafUltraBoldCharade40px,
    ManropeSemiBoldCharade28px,
    PptelegrafRegularNormalBlack17px,
    Border1pxSecond,
    PptelegrafRegularNormalBlack20px,
    PptelegrafUltraBoldCharade28px,
    ValignTextMiddle,
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .collection-before-container{
        display: flex;
        justify-content: center;
        .collection-container{
            position: relative;
            margin: 137px 0px 0px 0px;
            padding: 0px 22px 20px 22px;
            max-width: 1156px;
            width: 100%;
            .back-btn{
                position: absolute;
                top: -58px;
                left: 22px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 2px;
                width: 100px;
                height: 26px;
                @media screen and (max-width: 768px) {
                    top: -42px;
                }
                @media screen and (max-width: 600px) {
                    top: -45px;
                }
                .back-arrow{
                    ${ValignTextMiddle}
                    height: 13px;
                    width: 24px;
                    letter-spacing: 1.04px;
                    line-height: 22.5px;
                    white-space: nowrap;
                    transform:rotate(180deg);
                }
                .text{
                    ${PptelegrafRegularNormalBlack17px}
                    height: 13px;
                    margin-left: 10px;
                }
            }
            
            .search-bar{
                border-bottom: 1px solid rgba(105, 105, 105, 0.2);
                padding-bottom: 23px;
                display: flex;
                flex-direction: row;
                align-items: center;
                @media screen and (max-width: 650px) {
                    flex-direction: column;
                }
                .topic-txt{
                    @media screen and (max-width: 650px) {
                        align-items: start;
                        width: 100%;
                    }
                    .collection-count{
                        ${PptelegrafUltraBoldCharade40px}
                        min-height: 42px;
                        letter-spacing: 0;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        display: block;
                        max-width: 300px;
                        @media screen and (max-width: 600px) {
                            padding-bottom: 24px;
                        }
                    }
                    .collection-des{
                        ${PptelegrafRegularNormalBlack17px}
                        min-height: 58px;
                        letter-spacing: 0;
                        line-height: 29px;
                        padding-top: 24px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        display: block;
                        max-width: 300px;
                        @media screen and (max-width: 900px) {
                            padding-top: 12px;
                        }
                        @media screen and (max-width: 600px) {
                            padding-top: 16px;
                        }
                    }
                }
                .search-action{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-left: auto;
                    .add-collection-btn{
                        margin-left: 24px;
                    }
                    @media screen and (max-width: 900px) {
                        width: 255px;
                        flex-direction: column;
                    }
                    @media screen and (max-width: 650px) {
                        padding-top: 10px;
                        width: 100%;
                    }
                    .action-group{
                        display: flex;
                        flex-direction: column;
                        @media screen and (max-width: 650px) {
                            width: 100%;
                        }
                        .social-group{
                            display: flex;
                            flex-direction: row;
                            align-items: flex-end;
                            margin-left: auto;
                            .icon{
                                width: 28px;
                                height: 28px;
                            }
                            .mr-16{
                                margin-right: 16px;
                            }
                            @media screen and (max-width: 650px) {
                                justify-content: center;
                                margin: 0px;
                            }
                        }
                        .btn-group{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            padding-top: 24px;
                            .small-btn-outline{
                                ${Border1pxSecond}
                                ${PptelegrafRegularNormalBlack17px}
                                height: 32px;
                                width: 177px;
                                margin-left: auto;
                                margin-bottom: 0.78px;
                                display: flex;
                                padding: 0 15.5px;
                                justify-content: center;
                                align-items: center;
                                border-radius: 64px;
                                cursor: pointer;
                                &:hover {
                                    color: #ffffff;
                                    background: #000000;
                                }
                                @media screen and (max-width: 650px) {
                                    width: 100%;
                                    padding: 0px;
                                }
                                @media screen and (max-width: 900px) {
                                    margin-right: 0px;
                                    margin-top: 10px;
                                }
                            }
                            @media screen and (max-width: 900px) {
                                width: 255px;
                                flex-direction: column;
                            }
                            @media screen and (max-width: 650px) {
                                padding-top: 0px;
                                width: 100%;
                            }
                            .mr-24{
                                margin-right: 24px;
                                @media screen and (max-width: 900px) {
                                    margin-right: 0px;
                                }
                                @media screen and (max-width: 650px) {
                                    margin-right: 0px;
                                }
                            }
                        }
                    }
                }
            }
            .collection-list{
                padding-top: 32px;
            }
        }
    }
    
`;

export const DialogStyles = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 466px;
        width: 693px;
        padding: 34px 32px 34px 32px;
        overflow: hide;
        border-radius: 24px;
        background-color: white;
        @media screen and (max-width: 900px) {
            width: 633px;
        }
        @media screen and (max-width: 820px) {
            width: 530px;
        }
        @media screen and (max-width: 700px) {
            width: 352px;
            height: 444px;
            padding: 20px 20px 20px 20px;
        }
        .header{
            ${ManropeSemiBoldCharade28px}
            border-bottom: 1px solid var(--granite-gray);
            min-height: 36px;
            letter-spacing: 0;
            line-height: 36px;
            white-space: nowrap;
            padding-bottom: 24px;
            @media screen and (max-width: 700px) {
                padding-bottom: 16px;
            }
        }
        .body{
            .liner{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 24px 0px 12px 0px;
                @media screen and (max-width: 700px) {
                    padding: 21px 0px 12px 0px;
                }
                .label{
                    ${PptelegrafRegularNormalBlack17px}
                    min-height: 18px;
                    letter-spacing: 0;
                    
                }
                .max-character{
                    ${PptelegrafRegularNormalBlack17px}
                    margin-left: auto;
                }
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export const DeleteDlgStyle = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 422px;
        width: 781px;
        padding: 56px 0px 56px 0px;
        overflow: hide;
        border-radius: 24px;
        background-color: white;
        @media screen and (max-width: 900px) {
            width: 697px;
        }
        @media screen and (max-width: 850px) {
            width: 600px;
        }
        @media screen and (max-width: 700px) {
            width: 354px;
            height: 445px;
        }
        .header{
            ${PptelegrafUltraBoldCharade28px}
            min-height: 36px;
            min-width: 243px;
            text-align: center;
            letter-spacing: 0;
            line-height: 36px;
            white-space: nowrap;
        }
        .body{
            display: flex;
            flex-direction: column;
            align-items: center;
            .des-txt{
                ${PptelegrafRegularNormalBlack20px}
                width: 457px;
                min-height: 87px;
                text-align: center;
                letter-spacing: 0;
                line-height: 29px;
                padding-top: 23px;
                @media screen and (max-width: 700px) {
                    width: 297px;
                }
            }
            .picture{
                padding-top: 25px;
                width: 151px;
                height: 201px;
                padding-bottom: 26px;
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;
