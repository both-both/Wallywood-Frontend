import styled from "styled-components";
import { resetList } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const GenreListStyled = styled.ul`
  ${resetList}

  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }

  a.active {
    color: ${theme.colors.primary};
  }
`;
