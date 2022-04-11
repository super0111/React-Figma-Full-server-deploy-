import styled from "styled-components";
import {
    ManropeNormalCharade36px,
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    position: relative;
    padding: 32px;
    .header{
        max-width: 1124px;
        display: flex;
        .sort{
            padding-bottom: 26px;
            margin-left: auto;
        }
        .welcom{
            ${ManropeNormalCharade36px}
            position: absolute;
            top: 0px;
            left: 32px;
        }
    }
    .banner{
        display: flex;
        
    }
    .tables{
        display: flex;
        flex-wrap: wrap;
    }
    
`;