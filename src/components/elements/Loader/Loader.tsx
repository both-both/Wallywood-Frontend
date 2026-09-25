import { TailSpin } from "react-loader-spinner";
import type { LoaderProps } from "./Loader.types";
import { LoaderStyled } from "./Loader.style";
import { theme } from "../../../style/Theme.styled";

export const Loader = ({
  visible = true,
  height = "80",
  width = "80",
  color = theme.colors.primary,
  ariaLabel = "Indlæser indhold",
  radius = "1",
  wrapperStyle = {},
  wrapperClass = "",
}: LoaderProps) => {
  return (
    <LoaderStyled>
      <TailSpin
        visible={visible}
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
        radius={radius}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
      />
    </LoaderStyled>
  );
};
