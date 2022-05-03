import * as React from "react";
import { SectionName } from "../../components/SectionName";
import { Icon } from "../../components/Icon";
import { styled } from "../../utils/theme";

const SkillsList = styled.div`
    font-family: ${props => props.theme.headerFont}
`;

const SkillsItem = styled.p`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`

const Level = styled.span`
    font-weight: normal;
`

export function Skills(): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="construct"/> Skills</SectionName>
            <SkillsList>
                <SkillsItem><Level>Experienced</Level>: React, TypeScript, Node.js, HTML, SCSS, MongoDB</SkillsItem>
                <SkillsItem><Level>Working Knowledge</Level>: Python, SQL, Meteor, Mocha, Docker, Amazon SQS, Amazon Labmda</SkillsItem>
                <SkillsItem><Level>Previous Exposure</Level>: D3.js, AngularJS, Storybook, Webpack, Express</SkillsItem>
            </SkillsList>
        </div>
    );
}
