import styled from 'styled-components';
import { 
    Border2pxGrayNurse, 
    OpensansNormalBlack14px,
    Border2pxBrandPurple, 
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .input{
        ${Border2pxGrayNurse}
        ${OpensansNormalBlack14px}
        width: calc(100% - 48px);
        padding: 21px 24px 21px 24px;
        margin-bottom: 16px;
        height: 133px;
        background-color: var(--gallery);
        border-radius: 24px;
        overflow-y: auto;
        min-height: 16px;
        letter-spacing: 0.1px;
        line-height: 16px;
        outline: none;
        &:focus{
            ${Border2pxBrandPurple}
        }
    }
`;