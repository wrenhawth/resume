import * as React from "react";

type IconType = "mail" | "call" | "logo-github" | "construct" | "briefcase" | "school";

interface IconProps {
    type: IconType;
}

export function Icon(props: IconProps): JSX.Element {
    let iconType: string = props.type;
    if (!iconType.includes("logo")){
        iconType = `md-${iconType}`;
    }
    return (
        <span className={`icon ion-${iconType}`} />
    );
}
