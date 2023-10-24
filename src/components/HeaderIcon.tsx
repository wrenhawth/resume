import * as React from "react";
import { styled } from "../utils/theme";

type IconType = "mail" | "call" | "logo-github" | "construct" | "briefcase" | "school" | "star";

interface IconProps {
    type: IconType;
}

const IconSpan = styled.span`
    /* float: left; */
    padding-right: .25em;
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.primaryColor};
    border-bottom: ${props => props.theme.primaryColor};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-size: 24px;
`

export function HeaderIcon(props: IconProps): JSX.Element {
    let iconType: string = props.type;
    if (!iconType.includes("logo")){
        iconType = `md-${iconType}`;
    }
    return (
        <IconSpan className={`icon ion-${iconType}`} />
    );
}
