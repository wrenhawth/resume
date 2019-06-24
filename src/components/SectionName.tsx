import { styled } from "../utils/theme";

export const SectionName = styled.h2`
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.primaryColor};
    border-bottom: ${props => props.theme.primaryColor};
    border-bottom-width: 1px;
    border-bottom-style: solid;
`