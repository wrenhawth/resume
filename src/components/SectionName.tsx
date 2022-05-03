import { styled } from "../utils/theme";

export const SectionName = styled.h2`
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.primaryColor};
    border-bottom: ${props => props.theme.primaryColor};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    margin-top: 0.5em;
    display: inline-block;
    padding-right: 0.5em;
    margin-bottom: 0.5em;

`