import styled from 'styled-components';
import {
    ManropeMediumCharade14px
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    margin-top: 24px;
    .text-area-label{
        ${ManropeMediumCharade14px}
        color: var(--admin-black);
        padding-bottom: 10px;
    }
    .cutomed-textarea{
        ${ManropeMediumCharade14px}
        color: var(--admin-black);
        width: calc(100% - 40px);
        outline: none;
        border: 1px solid #EBEAED;
        padding: 20px;
        &::placeholder {
            color: rgba(105, 105, 105, 0.5);
        }
        &:focus {
            &::placeholder {
                color: var(--white);
            }
        }
    }
`;