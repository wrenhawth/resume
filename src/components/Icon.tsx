import * as React from "react";
import { styled } from "../utils/theme";

type IconType = "mail" | "call" | "logo-github" | "construct" | "briefcase" | "school" | "star";

interface IconProps {
    type: IconType;
}

const IconSpan = styled.span`
    /* vertical-align: middle; */
    padding-right: .25em;
`

export function Icon(props: IconProps): JSX.Element {
    let iconType: string = props.type;
    if (!iconType.includes("logo")){
        iconType = `md-${iconType}`;
    }
    return (
        <IconSpan className={`icon ion-${iconType}`} />
    );
}
