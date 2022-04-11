import styled from "styled-components";
import {
    PptelegrafUltraBoldMirage16px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .list-container{
        padding: 20px 0px 20px 0px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        position: absolute;
        top: 60px;
        left: 0px;
        width: 100%;
        z-index: 100;
        .list-item{
            z-index: 2;
            padding: 0px 20px 0px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 36px;
            ${PptelegrafUltraBoldMirage16px}
            min-height: 20px;
            letter-spacing: -0.3px;
            line-height: 20px;
            white-space: nowrap;
            background-color: var(--white);
            &:hover {
                background-color: var(--electric-violet2);
            }
        }
    }
`;