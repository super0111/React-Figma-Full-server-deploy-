import styled from 'styled-components';
import {
    ManropeNormalCharade14px,
} from '../../../../assets/styledMixins';

export const Styles = styled.div`
    width: 100%;
    .customed-input{
        ${ManropeNormalCharade14px}
        width: 100%;
        outline: none;
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #EBEAED;
        padding-bottom: 12px;
        padding-top: 40px;
        background-color: white !important;
        @media screen and (max-width: 600px) {
            padding-top: 32px;
        }
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
`;