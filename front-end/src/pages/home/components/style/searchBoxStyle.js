import styled from 'styled-components';
import {
    Border1pxSecond,
} from '../../../../assets/styledMixins';

export const Styles = styled.div`
    .search-box{
        position: relative;
        .search-input{
            ${Border1pxSecond}
            width: 100%;
            height: 53px;
            border-radius: 64px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            padding: 0px 30px;
            width: calc(100% - 60px);
            &::placeholder {
              color: rgba(105, 105, 105, 0.5);
            }
            &:focus {
              border: 1px solid #2f70b5;
              &::placeholder {
                color: rgba(105, 105, 105, 0.5);
              }
            }
          }
          .error {
            border: 1px solid #db5940;
          }
          .search-btn{
            position: absolute;
            right: 19px;
            top: 0px;
            background-color: #000000;
            width: 112px;
            height: 55px;
            border-radius: 63px;
          }
        }
    }
`;