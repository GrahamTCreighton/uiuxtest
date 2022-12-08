/** @jsxImportSource @emotion/react */
import PropTypes, { func } from "prop-types";
import brandPalette from "common/colors/brandColors";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ theme, size, ...props }) => {
  const mainCss = {
    fontFamily: "IBM Plex Sans",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    border: "0px",
    display: "flex",
    cursor: "pointer",
  };

  const themes = {
    FillPrimary: {
      color: brandPalette.light,
      backgroundColor: brandPalette.primary,
      "&:hover": {
        backgroundColor: brandPalette.primaryShade10,
      },
      "&:active, &:focus-visible": {
        backgroundColor: brandPalette.primaryShade10,
        outline: `3px solid ${brandPalette.primaryAlpha20}`,
      },
    },
    Disabled: {
      color: brandPalette.darkAlpha20,
      backgroundColor: "transparent",
    },
  };

  const cssSizes = {
    small: {
      fontSize: "12px",
      lineHeight: "12px",
      width: "auto",
      height: "24px",
      borderRadius: "45px",
      padding: "6px 12px 6px 9px",
      gap: "3px",
      svg: { height: "12px" },
    },
    default: {
      fontSize: "16px",
      lineHeight: "16px",
      width: "auto",
      height: "32px",
      borderRadius: "60px",
      padding: "8px 16px 8px 12px",
      gap: "4px",
      svg: { height: "16px" },
    },
    large: {
      fontSize: "20px",
      lineHeight: "20px",
      width: "auto",
      height: "40px",
      borderRadius: "75px",
      padding: "10px 20px 10px 15px",
      gap: "5px",
      svg: { height: "20px" },
    },
  };

  return (
    <button
      type="button"
      css={[mainCss, themes[theme], cssSizes[size]]}
      {...props}
    />
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(["FillPrimary", "Disabled"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /**
   * Button contents
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  theme: "FillPrimary",
  size: "default",
  onClick: undefined,
};
