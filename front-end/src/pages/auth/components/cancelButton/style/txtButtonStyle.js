import styled from "styled-components";
import {
  OpensansNormalElectricViolet14px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  .txt-button {
    ${OpensansNormalElectricViolet14px}
    min-height: 19px;
    text-align: center;
    letter-spacing: 0;
    text-decoration: underline;
    display: inline-block;
    margin-top: 16px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
      color: rgb(191 157 226);
    }
    
    @media screen and (max-width: 600px) {
      width: 160px;
      min-width: 160px;
    }
  }
`;
