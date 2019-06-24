import * as React from "react";
import { styled } from "../../../utils/theme";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export enum ContactType {
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    OTHER = "OTHER"
}

interface ContactLinkProps {
    type: ContactType;
    value: string;
}

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.mutedColor};
    :hover {
        color: ${props => props.theme.secondaryColor}
    }
`;

export function ContactLink(props: ContactLinkProps): JSX.Element {
    let href = props.value;
    let displayAs = props.value;
    if (props.type === ContactType.EMAIL) {
        href = `mailto:${props.value}`;
    } else if (props.type === ContactType.PHONE) {
        var phoneNumber = parsePhoneNumberFromString(props.value);
        if (phoneNumber) {
            href = phoneNumber.getURI();
            displayAs = phoneNumber.formatNational();
        }
    } else {
        href = props.value;
        displayAs = displayAs.replace(/https:\/\/|www\./, "");
    }
    return (
        <Link href={href}>{displayAs}</Link>
    );
}
