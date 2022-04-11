import styled from "styled-components";
import {
    PptelegrafUltraBoldCharade28px,
    PptelegrafRegularNormalBlack20px,
    ManropeSemiBoldCharade28px,
    PptelegrafRegularNormalBlack17px
} from '../../../assets/styledMixins';


export const Styles = styled.div`
    .image-container{
        position: relative;
        height: 473px;
        padding: 10px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        @media screen and (max-width: 892px) {
            height: 596px;
        }
        @media screen and (max-width: 600px) {
            height: 275px;
        }
        .favourite{
            position: absolute;
            top: 33px;
            right: 18px;
            .icon{
                width: 20px;
                height: 20px;
            }
        }
        .image-viewer{
            padding: 50px 20px 20px 20px;
            width: 80%;
            height: 80%;
            object-fit: cover;
        }
    }
`;

export const ViewCollectionDlgStyle = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 654px;
        width: 689px;
        padding: 34px 32px 34px 32px;
        overflow-x: hide;
        overflow-y: auto;
        border-radius: 24px;
        background-color: white;
        @media screen and (max-width: 900px) {
            width: 609px;
        }
        @media screen and (max-width: 800px) {
            width: 560px;
        }
        @media screen and (max-width: 600px) {
            width: 350px;
        }
        @media screen and (max-width: 700px) {
            width: 306px;
            height: 598px;
            padding: 20px 12px;
        }
        .header{
            ${PptelegrafUltraBoldCharade28px}
            min-height: 36px;
            min-width: 243px;
            text-align: center;
            letter-spacing: 0;
            line-height: 36px;
            white-space: nowrap;
        }
        .body{
            display: flex;
            flex-direction: column;
            align-items: center;
            .des-txt{
                ${PptelegrafRegularNormalBlack20px}
                width: 457px;
                min-height: 87px;
                text-align: center;
                letter-spacing: 0;
                line-height: 29px;
                padding-top: 23px;
                @media screen and (max-width: 700px) {
                    width: 297px;
                }
            }
            .picture{
                padding-top: 25px;
                width: 151px;
                height: 201px;
                padding-bottom: 26px;
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export const DialogStyles = styled.div`
    margin: 0px;
    position: relative;
    .dialog-container{
        height: 466px;
        width: 693px;
        padding: 34px 32px 34px 32px;
        overflow: hide;
        border-radius: 24px;
        background-color: white;
        @media screen and (max-width: 900px) {
            width: 633px;
        }
        @media screen and (max-width: 820px) {
            width: 530px;
        }
        @media screen and (max-width: 700px) {
            width: 352px;
            height: 444px;
            padding: 20px 20px 20px 20px;
        }
        .header{
            ${ManropeSemiBoldCharade28px}
            border-bottom: 1px solid var(--granite-gray);
            min-height: 36px;
            letter-spacing: 0;
            line-height: 36px;
            white-space: nowrap;
            padding-bottom: 24px;
            @media screen and (max-width: 700px) {
                padding-bottom: 16px;
            }
        }
        .body{
            .liner{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 24px 0px 12px 0px;
                @media screen and (max-width: 700px) {
                    padding: 21px 0px 12px 0px;
                }
                .label{
                    ${PptelegrafRegularNormalBlack17px}
                    min-height: 18px;
                    letter-spacing: 0;
                    
                }
                .max-character{
                    ${PptelegrafRegularNormalBlack17px}
                    margin-left: auto;
                }
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;