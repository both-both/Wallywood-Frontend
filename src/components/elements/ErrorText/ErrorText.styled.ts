import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const ErrorTextStyled = styled.span`
  display: block;
  width: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.body};
  margin-block-start: 0.25rem;
`;
