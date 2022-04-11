import styled from 'styled-components';

export const Styles = styled.div`
    .edit-profile-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        @media screen and (max-width: 600px) {
            margin-top: 40px;
        }
        .edit-header{
            display: flex;
            align-items: center;
            .edit-avatar{
                object-cover: fit;
                width: 89px;
                height: 89px;
                background-color: var(--mist-gray);
                border-radius: 89px;
                margin-right: 32px;
                @media screen and (max-width: 800px) {
                    min-width: 60px;
                    min-height: 60px;
                }
                @media screen and (max-width: 600px) {
                    width: 45px;
                    height: 45px;
                }
                .avatar-size{
                    width: 89px;
                    height: 89px;
                    border-radius: 89px;
                    object-fit: cover;
                    @media screen and (max-width: 800px) {
                        min-width: 60px;
                        min-height: 60px;
                        border-radius: 60px;
                    }
                    @media screen and (max-width: 600px) {
                        width: 45px;
                        height: 45px;
                        border-radius: 45px;
                    }
                }
            }
        }
        .edit-body{
        }
        .edit-footer{
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