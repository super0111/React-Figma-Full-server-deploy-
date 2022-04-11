import styled from 'styled-components';
import {
    ManropeMediumCharade14px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
    .input-label{
        ${ManropeMediumCharade14px}
        color: var(--admin-black);
        padding-bottom: 10px;
    }
    .customed-input{
        ${ManropeMediumCharade14px}
        color: var(--admin-black);
        outline: none;
        border: 1px solid #EBEAED;
        padding: 14px 16px;
        height: 18px;
        background-color: white !important;
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