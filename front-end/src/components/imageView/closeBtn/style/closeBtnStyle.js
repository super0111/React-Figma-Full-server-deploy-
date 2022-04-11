import styled from "styled-components";

export const Styles = styled.div`
  .close-button {
    position: absolute;
    right: -30px;
    top: -30px;
    background: white;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 61px;
    height: 61px;
    border-radius: 63px;
    box-shadow: -5px 13px 20px rgb(0 0 0 / 8%);
    &:hover {
      color: white;
      background: rgb(205 200 200 / 87%);
    }
    @media screen and (max-width: 700px) {
      width: 50px;
      height: 50px;
      right: -25px;
      top: -25px;
    }
  }
`;
