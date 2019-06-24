import baseStyled, { ThemedStyledInterface } from "styled-components/macro";

import { FontFamilyProperty, Color } from "csstype";

export interface Theme {
    headerFont: FontFamilyProperty;
    bodyFont: FontFamilyProperty;
    monoFont: FontFamilyProperty;
    primaryColor: Color;
    secondaryColor: Color;
    mutedColor: Color;
    white: Color;
}

export const defaultTheme: Theme = {
    headerFont: "'Work Sans', sans- serif",
    bodyFont: "'Taviraj', serif",
    monoFont: "'Space Mono', monospace",
    primaryColor: "#8789C0",
    secondaryColor: "#545E75",
    mutedColor: "#D8DDF0",
    white: "#FFFFFF",
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
