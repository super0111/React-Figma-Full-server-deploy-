import styled from "styled-components";
import {
  ManropeNormalCharade14px
} from '../../../../../../assets/styledMixins';

export const Styles = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  .txt-button {
    ${ManropeNormalCharade14px}
    color: var(--main);
    min-height: 19px;
    text-align: right;
    letter-spacing: 0;
    display: inline-block;
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
