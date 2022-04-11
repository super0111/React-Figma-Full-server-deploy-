import styled from 'styled-components';
import { ManropeBoldCharade18px } from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .account-setting-container{
        margin-top: 40px;
        width: 710px;
        .account-body{
            display: flex;
            flex-direction: column;
            .account-info{
                ${ManropeBoldCharade18px}
                padding-bottom: 12px;
            }
            padding-bottom: 120px;
            border-bottom: 1px solid #EBEAED;
        }
    }
`;