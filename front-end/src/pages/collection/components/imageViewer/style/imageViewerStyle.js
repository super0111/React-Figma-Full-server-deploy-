import styled from "styled-components";
import {
    Border1pxGraniteGray
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .image-container {
        ${Border1pxGraniteGray}
        position: relative;
        border-radius: 24px;
        cursor: pointer;

        height: 220px;
        width: 263px;

        margin-right: 21px;
        margin-bottom: 32px;

        @media screen and (max-width: 920px) {
            margin-right: 11px;
            margin-bottom: 24px;
            width: 227px;
            height: 190px;
        }
        @media screen and (max-width: 550px) {
            margin-right: 15px;
            margin-bottom: 16px;
            width: 164px;
            height: 137px;
        }
    }
    
    .image {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        object-fit: cover;
    }

    .overlay-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(105, 105, 105, 0) 34.62%);
        border-radius: 24px;
    }
    
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        width: 100%;
        height: 0px;
        border-radius: 24px;
        
        .close-btn{
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
    
    .image-container:hover .overlay {
        height: 100%;
    }
`;