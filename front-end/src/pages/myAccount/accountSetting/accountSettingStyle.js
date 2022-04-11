import styled from 'styled-components';

export const Styles = styled.div`
    @media screen and (max-width: 610px) {
        width: 100%;
    }
    .account-setting-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .account-setting-footer{
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