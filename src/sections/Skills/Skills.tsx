import * as React from "react";
import { SectionName } from "../../components/SectionName";
import { Icon } from "../../components/Icon";
import { styled } from "../../utils/theme";

const SkillsList = styled.div`
    font-family: ${props => props.theme.headerFont}
`;

const Level = styled.span`
    font-weight: normal;
`

export function Skills(): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="construct"/> Skills</SectionName>
            <SkillsList>
                <p><Level>Experienced</Level>: React, TypeScript, Node.js, HTML, SCSS, MongoDB</p>
                <p><Level>Working Knowledge</Level>: Python, SQL, Meteor, Mocha, Docker, Amazon SQS, Amazon Labmda</p>
                <p><Level>Previous Exposure</Level>: D3.js, AngularJS, Storybook, Webpack, Express</p>
            </SkillsList>
        </div>
    );
}
