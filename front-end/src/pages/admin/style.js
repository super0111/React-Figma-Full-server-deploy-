import styled from "styled-components";

export const Styles = styled.div`
    background-color: var(--background-gray);
    .admin-container{
        display: flex;
        flex-direction: row;
        .side-bar{
            width: 250px;
        }
        .right-panel{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
`;