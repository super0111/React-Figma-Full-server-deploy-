import styled from "styled-components";
import {
    ManropeNormalCharade14px,
    ManropeNormalCharade36px,
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
                .form-footer{
                    margin-top: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .name-group{
                    display: flex;

                }
            }
        }
    }
`;
