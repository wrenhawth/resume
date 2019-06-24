import * as React from "react";

import { Icon } from "../../../components/Icon";
import { ContactLink, ContactType } from "./ContactLink";
import { styled } from "../../../utils/theme";

interface ContactDetailsProps {
    email: string;
    phone: string;
    github: string;
}

const DetailsList = styled.ul`
    font-family: ${props => props.theme.monoFont};
    list-style: none;
    padding-left: 0;
    margin-top: 0;
`;

export function ContactDetails(props: ContactDetailsProps): JSX.Element {
    return (
        <DetailsList>
            <li>
                <Icon type="mail" />&nbsp;
                    <ContactLink
                    type={ContactType.EMAIL}
                    value={props.email}
                />
            </li>
            <li>
                <Icon type="call" />&nbsp;
                    <ContactLink
                    type={ContactType.PHONE}
                    value={props.phone}
                />
            </li>
            <li>
                <Icon type="logo-github" />&nbsp;
                    <ContactLink
                    type={ContactType.OTHER}
                    value={props.github}
                />
            </li>
        </DetailsList>
    );
}
