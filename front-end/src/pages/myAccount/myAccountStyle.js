import styled from 'styled-components';
import {
    PptelegrafRegularUltrabold36px,
    PptelegrafRegularUltraboldPurple36px,
} from '../../assets/styledMixins';

export const Styles = styled.div`
    .myaccount-before-container{
        display: flex;
        justify-content: center;
        position: relative;
        .myaccount-container{
            margin: 137px 0px 0px 0px;
            padding: 0px 22px 20px 22px;
            max-width: 1156px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .myaccount-header{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: auto;
                .header-avatar{
                    object-cover: fit;
                    width: 60px;
                    height: 60px;
                    border-radius: 60px;
                    background-color: var(--mist-gray);
                    @media screen and (max-width: 600px) {
                        min-width: 45px;
                        height: 45px;
                        max-width: 45px;
                    }
                }
                .header-content{
                    margin-left: 31px;
                    .user-name{
                        ${PptelegrafRegularUltrabold36px}
                    }
                    .profile-name{
                        ${PptelegrafRegularUltraboldPurple36px}
                    }
                }
                @media screen and (max-width: 600px) {
                    padding-left: 16px;
                }
            }
            .myaccount-content{
                &::-webkit-scrollbar {
                    display: none;
                }
                display: flex;
                flex-direction: row;
                overflow-y: hidden;
                margin-top: 56px;
                justify-content: center;
                .active-item{
                    font-family: var(--font-family-pp_telegraf-ultrabold) !important;
                    font-weight: 800px !important;
                    text-decoration-line: underline !important;
                }
                .mr-30{
                    margin-left: 30px;
                }
                @media screen and (max-width: 900px) {
                }
                @media screen and (max-width: 800px) {
                    height: 50px;
                    overflow-x: auto;
                      
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    justify-content: initial;
                }
                @media screen and (max-width: 600px) {
                }
            }
            .myaccount-message{
                display: flex;
                flex-direction: row;
                justify-content: center;
                @media screen and (max-width: 600px) {
                    padding: 16px;
                }
            }
            .myaccount-body{
                display: flex;
                justify-content: center;
                @media screen and (max-width: 600px) {
                    padding: 16px;
                }
            }
            
        }
    }
`;