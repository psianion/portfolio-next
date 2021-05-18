import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  primary0: "#F7F7F8",
  primary1: "#EAEAEC",
  primary2: "#88888A",
  secondary2: "#464649",
  secondary1: "#29292C",
  secondary0: "#18181B",
  highlight0: "#772CE8",
  highlight1: "#9147FF",
  highlight2: "#A970FF",
  success: "#29CC74",
  danger: "#E91916",
};

export const darkTheme = {
  secondary0: "#F7F7F8",
  secondary1: "#EAEAEC",
  secondary2: "#88888A",
  primary2: "#464649",
  primary1: "#29292C",
  primary0: "#18181B",
  highlight0: "#772CE8",
  highlight1: "#9147FF",
  highlight2: "#A970FF",
  success: "#29CC74",
  danger: "#E91916",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary1};
    color: ${({ theme }) => theme.secondary1};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s ease-in;
    font-size: 62.5%; 
    overflow-x: hidden;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
    }

`;
