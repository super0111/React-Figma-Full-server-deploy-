import styled from 'styled-components';
import { ManropeBoldCharade18px } from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .edit-profile-container{
        margin-top: 66px;
        width: 710px;
        @media screen and (max-width: 600px) {
            margin-top: 40px;
        }
        .edit-header{
            display: flex;
            align-items: center;
            padding-bottom: 36px;
            .edit-avatar{
                object-cover: fit;
                width: 100px;
                height: 100px;
                background-color: var(--mist-gray);
                border-radius: 100px;
                margin-right: 32px;
                .avatar-size{
                    width: 100px;
                    height: 100px;
                    border-radius: 100px;
                    object-fit: cover;
                }
            }
        }
        .edit-body{
            .edit-info{
                ${ManropeBoldCharade18px}
                padding-bottom: 4px;
            }
            .edit-name{
                width: 100%;
                display: flex;
                .divider{
                    width: 20px;
                }
                padding-bottom: 24px;
            }
            padding-bottom: 120px;
            border-bottom: 1px solid #EBEAED;
        }
        .edit-footer{
            padding-top: 36px;
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