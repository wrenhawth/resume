import React from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { PageHeader } from "./sections/PageHeader/PageHeader";
import { defaultTheme, styled } from "./utils/theme";
import { PageBody } from "./sections/PageBody/PageBody";

const Resume = styled.div`
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 16px;
`;

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Resume className="resume">
        <PageHeader />
        <PageBody />
      </Resume>
    </ThemeProvider>
  );
}
