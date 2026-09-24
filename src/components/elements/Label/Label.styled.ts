import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const LabelStyled = styled.label`
  display: block;
  font: ${theme.fontSizes.body};

  span {
    color: ${theme.colors.primary};
  }
`;
