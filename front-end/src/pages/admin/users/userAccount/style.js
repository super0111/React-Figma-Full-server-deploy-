import styled from "styled-components";
import { 
    ManropeMediumCharade14px, 
    ManropeSemiboldCharade32px,
    ManropeBoldCharade18px,
} from "../../../../assets/styledMixins";

export const Styles = styled.div`
    .account-container{
        display: flex;
        flex-direction: column;
        padding: 20px 0px 0px 32px;
        .account-header{
            height: 103px;
            border-bottom: 1px solid #EBEAED;
            width: 100%;
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
                    .disable{
                        background-color: #e6e5e9;
                    }
                }
            }
        }
    }
`;