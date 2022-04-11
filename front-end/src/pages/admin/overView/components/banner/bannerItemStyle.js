import styled from "styled-components";
import {
    ManropeNormalCharade14px,
    ManropeSemiboldCharade14px,
    InterCharadeSemiBoldCharade32px,
} from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    width: 281px;
    height: 168px;
    .banner-item{
        border-left: 1px solid var(--divider);
        border-radius: 4px;
        padding: 24px;
        background-color: var(--white);
        .item-header{
            padding-bottom: 24px;
            display: flex;
            align-items: center;
            .icon{
                width: 24px;
                height: 24px;
            }
            .header-txt{
                ${ManropeNormalCharade14px}
                padding-left: 18px;
            }
        }
        .total-counts{
            ${InterCharadeSemiBoldCharade32px}
            padding-bottom: 8px;
        }
        .item-footer{
            display: flex;
            flex-direction: row;
            align-items: center;
            .increase-percent{
                ${ManropeSemiboldCharade14px}
                padding-left: 4px;
            }
            .today-user{
                ${ManropeNormalCharade14px}
                padding-left: 8px;
            }
        }
    }
    .banner-active{
        background-color: var(--ocean-blue-pearl);
        .header-txt{
            color: var(--white) !important;
        }
        .total-counts{
            color: var(--white) !important;
        }
        .increase-percent{
            color: var(--white) !important;
        }
        .today-user{
            color: var(--white) !important;
        }
    }
    .divider{
        border-left: 1px solid var(--divider);
    }
`;