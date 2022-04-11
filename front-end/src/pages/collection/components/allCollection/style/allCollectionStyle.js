import styled from "styled-components";
import {
    PptelegrafRegularNormalBlack17px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
  .all-collection{
    
    .collection-list{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .empty{
        text-align: center;
        ${PptelegrafRegularNormalBlack17px}
        padding-top: 251px;
        line-height: 29px;
        @media screen and (max-width: 900px) {
            padding-top: 181px;
        }
        @media screen and (max-width: 600px) {
            padding-top: 125px;
        }
    }
  }
`;
