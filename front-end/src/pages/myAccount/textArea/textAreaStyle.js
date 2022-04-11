import styled from 'styled-components';
import {
    PptelegrafRegularNormalBlack20px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .cutomed-textarea{
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
    }
`;