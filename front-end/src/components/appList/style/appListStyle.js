import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack28px,
  } from '../../../assets/styledMixins';

export const Styles = styled.div`
    .app-list-conatiner{
        
        .title{
            ${PptelegrafUltraBoldBlack28px}
            min-height: 30px;
            letter-spacing: 0;
            padding: 60px 0px 24px 0px;
        }
        .app-list{
            display: flex;
            flex-direction: row;
            @media screen and (max-width: 600px) {
                margin: 0px;
                flex-wrap: wrap;
                padding: 0px 30px;
            }
        }
    }
`;

// flex-wrap: wrap;

// @media screen and (max-width: 1500px) {
//     flex-wrap: nowrap;
// }
// @media screen and (max-width: 600px) {
//     flex-wrap: wrap;
//     justify-content: center;
// }