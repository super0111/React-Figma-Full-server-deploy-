import styled from 'styled-components';
import {
    Border1pxGraniteGray,
    Border2pxBrandPurple,
    PptelegrafRegularNormalGraniteGray1
} from '../../../../assets/styledMixins';

export const Styles = styled.div`
    .collection-card{
        ${Border1pxGraniteGray}
        width: 100%;
        height: 121px;
        border-radius: 24px;
        margin-top: 24px;
        display: flex;
        align-items: center;
        padding: 1px;
        @media screen and (max-width: 700px) {
            flex-wrap: wrap;
            height: 173px;
            padding: 21px 13px 17px 13px;
            width: calc(100% - 26px);
        }
        &:hover{
            ${Border2pxBrandPurple}
            padding: 0px;
            @media screen and (max-width: 700px) {
                padding: 20px 12px 16px 12px;
            }
        }
        .collection-txt{
            width: 45%;
            padding-left: 32px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .collection-name{
                font-family: (--font-family-pp_telegraf-ultrabold);
                font-style: normal;
                font-weight: 800;
                font-size: 17px;
                line-height: 18px;
                text-align: center;
                color: #000000;
                max-width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
                max-width: 150px;
            }
            .sub-name{
                ${PptelegrafRegularNormalGraniteGray1}
                padding-top: 13px;
                max-width: 200px;
                overflow: hidden;
                line-height: 15px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
                max-width: 150px;
                @media screen and (max-width: 700px) {
                    padding-top: 8px;
                }
            }
            .txt{
                ${PptelegrafRegularNormalGraniteGray1}
                padding-top: 13px;
                line-height: 15px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
                max-width: 150px;
                @media screen and (max-width: 700px) {
                    padding-top: 8px;
                }
            }
            @media screen and (max-width: 800px) {
                width: 40%;
            }
            @media screen and (max-width: 700px) {
                width: 100%;
                padding-left: 0px;
            }
        }
        .image-group{
            width: 55%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-right: 32px;
            .image-item{
                width: 95px;
                height: 95px;
                background-color: var(--granite-gray);
                border-radius: 24px;
                @media screen and (max-width: 700px) {
                    width: 90px;
                    height: 90px;
                }
            }
            @media screen and (max-width: 800px) {
                width: 60%;
            }
            @media screen and (max-width: 700px) {
                width: 100%;
                padding-right: 0px;
                justify-content: space-around;
            }
        }
    }
    .focus{
        ${Border2pxBrandPurple}
        padding: 0px;
        @media screen and (max-width: 700px) {
            padding: 20px 12px 16px 12px;
        }
    }
`;
