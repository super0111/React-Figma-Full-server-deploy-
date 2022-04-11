import styled from 'styled-components';
import { ManropeBoldCharade18px } from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .notification-setting-container{
        margin-top: 40px;
        width: 710px;
        .notification-body{
            display: flex;
            flex-direction: column;
            .notification-info{
                ${ManropeBoldCharade18px}
                padding-bottom: 12px;
            }
            padding-bottom: 120px;
            border-bottom: 1px solid #EBEAED;
        }
    }
`;