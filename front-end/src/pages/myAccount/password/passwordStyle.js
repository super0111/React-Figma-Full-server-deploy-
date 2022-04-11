import styled from 'styled-components';
import {
    PptelegrafRegularNormalGray11px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    .password-container{
        margin-top: 66px;
        max-width: 542px;
        width: 100%;
        .password-body{
            .password-alarm{
                ${PptelegrafRegularNormalGray11px}
                padding-top: 5px;
            }
            .warning{
                color: var(--warnig);
            }
        }
        .password-footer{
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