import styled from 'styled-components';
import { 
    Border2pxBrandPurple, 
    Border2pxGrayNurse, 
    OpensansNormalBlack14px } from '../../../../assets/styledMixins';

export const Styles = styled.div`
    .input{
        ${Border2pxGrayNurse}
        ${OpensansNormalBlack14px}
        filter: drop-shadow(0px 1px 12px rgba(0, 0, 0, 0.12));

        width: calc(100% - 48px);
        padding: 0px 24px 0px 24px;
        height: 54px;
        background-color: var(--white);
        border-radius: 24px;
        outline: none;
        &:focus{
            ${Border2pxBrandPurple}
            filter: drop-shadow(0px 1px 12px rgba(46, 44, 52, 0.12));
        }
        @media screen and (max-width: 700px) {
            height: 36px;
        }
    }
`;