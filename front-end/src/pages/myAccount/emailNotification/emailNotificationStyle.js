import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack24px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .email-notification-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .email-notification-header{
            ${PptelegrafUltraBoldBlack24px}
            padding-bottom: 32px;
        }
        .email-notification-footer{
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