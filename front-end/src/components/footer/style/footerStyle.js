import styled from 'styled-components';
import {
    PptelegrafRegularNormalWhite14px,
} from '../../../assets/styledMixins';

export const Styles = styled.div`
  .footer-before-container{
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    @media screen and (min-width: 1900px) {
      margin: 0px 122px 0px 186px;
    }
    .footer{
      width: 100%;
      max-width: 1156px;
      ${PptelegrafRegularNormalWhite14px}
      @media screen and (max-width: 1200px) {
        margin: 0px 140px;
      }
      @media screen and (max-width: 1000px) {
        margin: 0px 100px;
      }
      @media screen and (max-width: 800px) {
        margin: 0px 60px;
      }
      @media screen and (max-width: 600px) {
        margin: 0px 16px;
      }
      @media screen and (min-width: 1900px) {
        margin-bottom: 30px;
      }
      height: 45px;
      display: flex;
      padding: 0px 40px 0px 40px;
      align-items: center;
      background-color: var(--second);
      border-radius: 26px;
      overflow: hidden;
      margin: 137px 186px 0px 186px;
      .terms{
          display: flex;
          align-items: center; 
          min-height: 15px;
          min-width: 48px;
          letter-spacing: 0;
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
      }
      .privacy{
          display: flex;
          align-items: center;
          min-height: 15px;
          margin-left: 58px;
          min-width: 59px;
          letter-spacing: 0;
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
      }
      .copyright{
          display: flex;
          align-items: center;
          min-height: 15px;
          letter-spacing: 0;
          display: inline-block;
          margin-left: auto;
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
      }
    }
  }
  
`;