import styled from 'styled-components';

export const Styles = styled.div`
    @media screen and (max-width: 650px) {
      width: calc(100% - 24px);
      margin: auto;
      margin-left: 0px;
    }
    .search-box{
        position: relative;
        .search-input{
            box-shadow: 4px -2px 9px 8px rgb(0 0 0 / 2%);
            background-color: var(--white);
            border: none;
            outline: none;
            height: 48px;
            display: flex;
            padding: 0 12px;
            justify-content: flex-end;
            align-items: center;
            width: 233px;
            background-color: var(--white);
            border-radius: 24px;
            &::placeholder {
              color: #8b939e;
            }
            @media screen and (max-width: 650px) {
                width: 100%;
            }
            &:focus {
                border: none;
            }
          }
          .error {
            border: 1px solid #db5940;
          }
          .search-btn{
            position: absolute;
            right: 19px;
            top: 15px;
          }
        }
    }
`;