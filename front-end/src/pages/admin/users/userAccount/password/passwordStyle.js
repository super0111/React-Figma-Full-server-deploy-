import styled from 'styled-components';
import { ManropeBoldCharade18px, PptelegrafRegularNormalGray11px } from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .password-container{
        margin-top: 40px;
        width: 710px;
        .password-body{
            display: flex;
            flex-direction: column;
            padding-bottom: 120px;
            border-bottom: 1px solid #EBEAED;
            .password-info{
                ${ManropeBoldCharade18px}
                padding-bottom: 12px;
            }
            .password-alarm{
                ${PptelegrafRegularNormalGray11px}
                padding-top: 5px;
            }
            .warning{
                color: var(--warnig);
            }
        }
    }
`;