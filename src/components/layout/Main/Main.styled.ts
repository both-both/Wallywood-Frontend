import styled from "styled-components";
import { Container } from "../../elements/Container/Container";
import { theme } from "../../../style/Theme.styled";
import { pageWidth } from "../../../style/mixin";

export const MainStyled = styled(Container)`
  ${pageWidth}
  padding-inline: 2rem;
  background-color: ${theme.colors.white};
  padding-block-start: 2rem;
`;
