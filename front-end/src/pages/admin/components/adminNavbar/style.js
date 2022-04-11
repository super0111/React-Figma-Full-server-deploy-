import styled from "styled-components";
import { ManropeSemiboldCharade16px } from "../../../../assets/styledMixins";

export const Styles = styled.div`
    .admin-nav-container{
        height: 96px;
        width: 100%;
        display: flex;
        align-items: center;
        .user-info{
            padding-right: 32px;
            margin-left: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            .avatar{
                width: 32px;
                height: 32px;
                object-fit: cover;
                border-radius: 24px;
            }
            .user-name{
                display: flex;
                align-items: center;
                padding-left: 12px;
                ${ManropeSemiboldCharade16px}
            }
            .icon-btn{
                padding-left: 4px;
            }
        }
    }
`;