/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import brandPalette from "common/colors/brandColors";
/**
 * Primary UI component for user interaction
 */
export const FloatingButton = ({ theme, size, ...props }) => {
  const themes = {
    FillPrimary: {
      color: brandPalette.light,
      backgroundColor: brandPalette.primary,
      "&:hover": { backgroundColor: brandPalette.primaryShade10 },
      "&:active, &:focus-visible": {
        backgroundColor: brandPalette.primaryShade10,
        outline: `3px solid ${brandPalette.primaryAlpha20}`,
      },
    },
  };

  const cssSizes = {
    default: {
      height: "56px",
      width: "56px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      svg: { height: "28px" },
    },
  };

  return (
    <floatingbutton
      type="button"
      css={[themes[theme], cssSizes[size]]}
      {...props}
    />
  );
};

FloatingButton.propTypes = {
  theme: PropTypes.oneOf(["FillPrimary"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["default"]),
  /**
   * Button contents
   */
};

FloatingButton.defaultProps = {
  theme: "FillPrimary",
  size: "default",
};
