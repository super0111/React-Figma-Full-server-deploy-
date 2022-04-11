import styled from "styled-components";
import {
  OpensansNormalElectricVioletBlack14px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
  display: flex;
  .txt-button {
    ${OpensansNormalElectricVioletBlack14px}
    color: var(--ocean-blue-pearl);
    min-height: 19px;
    text-align: right;
    letter-spacing: 0;
    text-decoration: underline;
    display: inline-block;
    cursor: pointer;
    transition: .3s ease;
    align-items: center;
    &:hover {
      color: var(--purple);
    }
    
    @media screen and (max-width: 600px) {
      width: 150px;
      min-width: 150px;
      margin-top: 30px;
    }
  }
`;
