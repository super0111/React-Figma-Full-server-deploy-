import styled from 'styled-components';

export const Styles = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 800px) {
        margin-top: 32px;
    }
    @media screen and (max-width: 600px) {
        margin-top: 24px;
    }
    .system-message-container{
        margin: 30px 30px 10px 30px;
        width: 690px;
        height: 360px;
        overflow-y: auto;
        overflow-x: hidden;
        @media screen and (max-width: 600px) {
            margin: 0px;
        }
    }
`;