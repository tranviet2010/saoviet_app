
import styled from "styled-components";
import { MainColor } from "../variable/variable";

export const ButtonCore = styled.button`
    margin:0 1em;
    height:32px;
    padding:4px 15px;
    color:#fff;
    border:none;
    border-radius:5px;
    background-color:${MainColor};
    cursor: pointer;
`;

export const PaddingDiv = styled.div`
    padding:.5rem 0
`;
