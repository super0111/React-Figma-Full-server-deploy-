import styled from 'styled-components';
import {
    PptelegrafRegularUltrabold36px,
    PptelegrafUltraBoldBlack20px
} from '../../../../assets/styledMixins';

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
    .general-message-container{
        margin: 30px 30px 10px 30px;
        width: 690px;
        height: 360px;
        overflow-y: auto;
        overflow-x: hidden;
        @media screen and (max-width: 600px) {
            margin: 0px;
        }
        .empty{
            ${PptelegrafRegularUltrabold36px}
            display: flex;
            justify-content: center;
            margin-top: 167px;
            @media screen and (max-width: 800px) {
                margin-top: 113px;
            }
            @media screen and (max-width: 600px) {
                ${PptelegrafUltraBoldBlack20px}
                margin-top: 95px;
            }
        }
    }
`;