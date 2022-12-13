/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import brandPalette from "common/colors/brandColors";
import semanticPalette from "../common/colors/semanticColors";
import { Danger } from "common/icons";
/**
 * Primary UI component for user interaction
 */
export const InputForm = ({ theme, size, errorMessage, ...props }) => {
  const mainCss = {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontStyle: "normal",
    justifyContent: "center",
    alignItems: "center",
    border: "0px",
    display: "flex",
    width: "320px",
    height: "40px",
    borderRadius: "4px",
    backgroundColor: brandPalette.darkAlpha5,
  };

  const themes = {
    Default: {
      color: brandPalette.light,
      backgroundColor: brandPalette.darkAlpha5,
      "&:hover": {
        backgroundColor: brandPalette.primaryAlpha5,
      },
      "&:active, &:focus-visible": {
        backgroundColor: brandPalette.primaryAlpha5,
        outline: `1.25px solid ${brandPalette.primary}`,
      },
    },
    Empty: {
      color: brandPalette.darkAlpha40,
      backgroundColor: brandPalette.darkAlpha5,
    },
    Error: {
      backgroundColor: semanticPalette.dangerAlpha5,
      outline: `1.25px solid ${semanticPalette.danger}`,
    },
  };

  return (
    <div>
      <input css={[mainCss, themes[theme]]} {...props} />
      {errorMessage ? (
        <div>
          <Danger />
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};

InputForm.propTypes = {
  theme: PropTypes.oneOf(["Empty", "Default", "Error"]),
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

InputForm.defaultProps = {
  theme: "Error",
  placeholder: "Placeholder",
};
