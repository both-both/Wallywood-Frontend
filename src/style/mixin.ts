import { theme } from "./Theme.styled";

export const reset = `
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const resetList = `
  ${reset}
  list-style: none;
`;

export const resetLink = `
  ${reset}
  text-decoration: none;
  `;

export const resetButton = `
 ${reset}
  text-decoration: none;
 background: none;
 border: none;
cursor: pointer;
`;

export const pageWidth = `
  max-width: ${theme.sizes.maxWidth}px;
  margin-inline: auto;
`;
