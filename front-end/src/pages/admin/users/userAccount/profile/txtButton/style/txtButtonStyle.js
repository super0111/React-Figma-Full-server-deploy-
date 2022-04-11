import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  .txt-button {
    color: var(--red);
    font-family: var(--font-family-pp_telegraf-regular);
    font-size: var(--font-size-14);
    font-weight: 400;
    font-style: normal;
    height: 42px;
    width: 68px;
    letter-spacing: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 14px;
    transition: .3s ease;
    border: 1px solid #EBEAED;
    box-sizing: border-box;
    &:hover {
      color: var(--warnig);
      background-color: #f1f0f3;
    }
  }
`;
