import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack17px,
    PptelegrafRegularNormalGraniteGray1,
    Border1pxGraniteGray,
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .card-container{
        position: relative;
        padding: 24px 20px 20px 20px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        height: 323px;
        cursor: pointer;
        margin-right: 20px;
        margin-bottom: 31px;
        width: 223px;
        @media screen and (max-width: 920px) {
            padding: 24px 20px 20px 20px;
            margin-right: 11px;
            margin-bottom: 24px;
            width: 187px;
            height: 263px;
        }
        @media screen and (max-width: 550px) {
            padding: 15px;
            margin-right: 15px;
            margin-bottom: 16px;
            width: 164px;
            height: 228px;
        }
        .card-header{
            display: flex;
            flex-direction: column;
            align-items: center;
            .collection-name{
                ${PptelegrafUltraBoldBlack17px}
                display: flex;
                justify-content: center;
                margin-bottom: 13px;
                min-height: 18px;
                text-align: center;
                letter-spacing: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
                max-width: 100px;
                overflow: hidden;
                @media screen and (max-width: 600px) {
                    margin-bottom: 5px;
                }
            }
            .sub-name{
                ${PptelegrafRegularNormalGraniteGray1}
                text-align: center;
                height: 15px;
                border-radius: 100px;
                letter-spacing: 0;
                padding-bottom: 20px;
                text-overflow: ellipsis;
                display: block;
                max-width: 100px;
                overflow: hidden;
                @media screen and (max-width: 800px) {
                    margin-top: 4px;
                }
                @media screen and (max-width: 600px) {
                    padding-bottom: 12px
                }
            }
        }
        .card-body{
            display: flex;
            flex-direction: column;
            .main{
                ${Border1pxGraniteGray}
                height: 155px;
                border-radius: 24px;
                width: 100%;
                margin-bottom: 7px;
                @media screen and (max-width: 920px) {
                    height: 111px;
                    width: 183px;
                }
                @media screen and (max-width: 550px) {
                    height: 100px;
                    width: 157px;
                }
            }
            .child{
                width: 100%;
                height: 95px;
                background-color: var(--granite-gray);
                border-radius: 24px;
                @media screen and (max-width: 920px) {
                    height: 80px;
                    border-radius: 18px;
                }
                @media screen and (max-width: 550px) {
                    height: 63px;
                    border-radius: 14px;
                }
            }
        }
    }
`;