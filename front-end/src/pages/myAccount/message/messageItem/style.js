import styled from 'styled-components';
import {
    PptelegrafUltraBold16pxW7,
    PptelegrafRegularNormalBlack16px,
    PptelegrafRegularNormalGray16px
} from '../../../../assets/styledMixins';

export const Styles = styled.div`
    .message-item-container{
        height: 43px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 33px;
        padding-bottom: 29px;
        @media screen and (max-width: 600px) {
            padding-left: 5px;
        }
        .timeline-container{
            position: relative;
            .timeline{
                width: 1px;
                border-left: 1px dashed #84818A;
                height: 72px;
            }
            .dot-icon{
                position: absolute;
                top: 30px;
                left: -6px;
                width: 12px;
                height: 12px;
            }

        }
        .message-cover{
            margin-left: 30px;
            display: flex;
            align-items: center;
            .sender-avatar{
                width: 42px;
                height: 42px;
            }
            .message-item-body{
                display: flex;
                flex-direction: column;
                margin-left: 8px;
                .message-item-header{
                    display: flex;
                    align-items: center;
                    .message-item-sender{
                        ${PptelegrafUltraBold16pxW7}
                    }
                    .message-item-content{
                        ${PptelegrafRegularNormalBlack16px}
                        margin-left: 4px;
                    }
                }
                
                .message-item-date{
                    margin-top: 6px;
                    ${PptelegrafRegularNormalGray16px}
                }
            }
        }
        
    }
`;