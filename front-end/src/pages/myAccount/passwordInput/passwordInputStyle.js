import styled from 'styled-components';
import {
    PptelegrafRegularNormalBlack20px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    position: relative;
    .password-input{
        ${PptelegrafRegularNormalBlack20px}
        width: 100%;
        outline: none;
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: 1px solid var(--second);
        padding-bottom: 12px;
        padding-top: 40px;
        &::placeholder {
            color: rgba(105, 105, 105, 0.5);
        }
        &:focus {
            &::placeholder {
                color: var(--white);
            }
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 100px white inset !important;
        }
    }
    .eye-icon{
        position: absolute;
        right: 0px;
        top: 41px;
    }
    .non-eye-icon{
        position: absolute;
        right: 0px;
        top: 36px;
    }
`;