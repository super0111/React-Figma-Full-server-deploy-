import styled from "styled-components";
import { 
    ManropeMediumCharade14px, 
    ManropeSemiboldCharade32px,
    ManropeBoldCharade18px,
    ManropeSemiBoldCharade28px,
    ManropeNormalCharade20px,
    ManropeExtraBoldCharade36px,
} from "../../../../assets/styledMixins";

export const Styles = styled.div`
    .account-container{
        display: flex;
        flex-direction: column;
        padding: 20px 0px 0px 32px;
        .account-header{
            height: 103px;
            width: 50%;
            .first-line{
                ${ManropeMediumCharade14px}
            }
            .second-line{
                ${ManropeSemiboldCharade32px}

            }
        }
        .account-body{
            display: flex;
            padding-bottom: 83px;
            .left-panel{
                width: calc(100% - 400px);
                height: 752px;
                .left-panel-footer{
                    display: flex;
                    padding-top: 36px;
                }
                .ml-24{
                    margin-left: 24px;
                }
            }
            .right-panel{
                width: 400px;
                height: 805px;
                margin-left: 48px;
                padding: 32px;
                background-color: var(--white);
                .right-panel-header{
                    ${ManropeBoldCharade18px}
                    padding-bottom: 20px;
                }
                .form-group{
                    display: flex;
                    flex-direction: column;
                    .account-btn{
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        height: 51px;
                        border-bottom: 1px solid #EBEAED;
                        .label{
                            margin-left: 16px;
                            ${ManropeMediumCharade14px}
                        }
                        .active{
                            color: var(--ocean-blue-pearl);
                        }
                        .icon{
                            margin-left: auto;
                        }
                    }
                }
            }
        }
    }
`;


export const ForgotStyle = styled.div`
    margin: 0px;
    position: relative;
    width: 866px;
    padding: 62px 139px 30px 139px;
    height: 365;
    .dialog-container{
        overflow: hidden;
        border-radius: 24px;
        background-color: white;
        .content{
            padding: 64px 125px 40px 125px;
            height: 100%;
            border: 1px solid var(--mist-gray);
            border-radius: 24px;
            .header{
                ${ManropeExtraBoldCharade36px}
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
                padding-top: 13px;
                .des-txt{
                    padding-bottom: 22px;
                    text-align: center;
                    ${ManropeNormalCharade20px}
                }
            }
            .footer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;