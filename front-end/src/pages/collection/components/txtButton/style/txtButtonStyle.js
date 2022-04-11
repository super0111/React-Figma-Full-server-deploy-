import styled from "styled-components";
import { 
  PptelegrafRegularNormalWhite16px,
  Border1pxPurple,
  PptelegrafRegularNormalWhite24px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
  .txt-button {
    color: white;
    right: -2px;
    top: 1px;
    background: #1a1a1c;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 53px;
    width: 528px;
    text-align: right;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
    border-radius: 63px;
    margin-bottom: 50px;
    ${PptelegrafRegularNormalWhite24px}
    &:hover {
      color: white;
      background: rgb(51, 51, 51);
    }
    @media screen and (max-width: 768px) {
      ${PptelegrafRegularNormalWhite16px}
      ${Border1pxPurple}
      width: 275px;
      background-color: var(--second);
      border-radius: 100px;
    }
  }
`;
