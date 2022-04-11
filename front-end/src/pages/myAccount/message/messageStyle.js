import styled from 'styled-components';

export const Styles = styled.div`
    width: 100%;
    .message-container{
        margin-top: 66px;
        width: 100%;
        .message-header{
            display: flex;
            justify-content: center;
        }
        .divider{
            margin-top: 40px;
            width: 100%;
            border: 1px solid #E8E8E8;
            @media screen and (max-width: 600px) {
                margin-top: 24px;
            }
        }
        .message-footer{
            padding-top: 40px;
            display: flex;
            justify-content: center;
        }
    }
`;