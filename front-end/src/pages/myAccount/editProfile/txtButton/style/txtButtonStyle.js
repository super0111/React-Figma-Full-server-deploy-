import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  .txt-button {
    color: var(--purple);
    font-family: var(--font-family-pp_telegraf-regular);
    font-size: var(--font-size-14);
    font-weight: 400;
    font-style: normal;
    min-height: 19px;
    text-align: right;
    letter-spacing: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 14px;
    transition: .3s ease;
    &:hover {
      color: var(--blue-hover);
    }
    
    @media screen and (max-width: 600px) {
      width: 160px;
      min-width: 160px;
    }
  }
`;
