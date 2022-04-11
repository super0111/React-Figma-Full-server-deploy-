import styled from "styled-components";

export const Styles = styled.div`
  .container{
    position: relative;
    width: 400px;
    padding-top: 43px;
    
    .item{
      margin: 0px 5px;
      width: 178px;
      height: 315px;
      background: #E1E1E1;
      border-radius: 5px;
    }
    .cover{
      position: absolute;
      width: 70px;
      height: 315px;
      right: 0px;
      top: 43px;
      background: linear-gradient(90deg, #FFFFFF 27.19%, rgba(255, 255, 255, 0) 86.72%);
      opacity: 0.8;
      transform: rotate(180deg);
    }
  }
`;
