import styled from 'styled-components';
import {
    PptelegrafUltraBoldBlack20px,
    PptelegrafRegularNormalWhite10px,
    ValignTextMiddle
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .app-card{
        position: relative;
        padding: 10px 0px 40px 0px;
        box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
        background-color: var(--white);
        border-radius: 16px;
        width: 400px;
        margin: 0px 24px 24px 0px;
        @media screen and (max-width: 600px) {
            margin-left: 0px;
            margin-bottom: 10px;
        }
        .card-header{
            .circle{
                position: absolute;
                left: 44px;
                top: 44px;
                width: 45px;
                height: 45px;
                background-color: var(--mist-gray);
                border-radius: 22.5px;
            }
            .card-body{
                display: flex;
                flex-direction: column;
                .app-name{
                    margin-top: 44px;
                    margin-left: 101px;
                    margin-bottom: 8px;
                    display: inline-block;
                    ${PptelegrafUltraBoldBlack20px}
                    min-height: 21px;
                    letter-spacing: 0;
                }
                .sub-name{
                    display: inline-block;
                    margin-left: 101px;
                    ${ValignTextMiddle}
                    ${PptelegrafRegularNormalWhite10px}
                    text-align: center;
                    letter-spacing: 0.8px;
                    line-height: 10.5px;
                    white-space: nowrap;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    width: 140px;
                    background-color: var(--second);
                    border-radius: 100px;
                    @media screen and (max-width: 800px) {
                        margin-top: 4px;
                    }
                }
            }
        }
    }
`;