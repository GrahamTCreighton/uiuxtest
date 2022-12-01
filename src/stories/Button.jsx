/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import BrandPalette from "../common/colors/brandColors";
import SemanticPalette from "../common/colors/semanticColors";
import { Tweets } from "../common/icons/icons";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ theme, size, state, ...props }) => {
  const mainCss = {
    fontFamily: "IBM Plex Sans",
    fontWeight: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "0px",
    flex: "none",
    order: 0,
    flexGrow: 0,
  };

  const themes = {
    FillPrimary: {
      color: BrandPalette.light,
      backgroundColor: BrandPalette.primary,
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

  const stateTheme = {
    default: {},
    hover: {},
    focus: {},
    disabled: {},
  };

  return (
    <button
      type="button"
      css={{
        ...mainCss,
        ...themes[theme],
        ...cssSizes[size],
        ...stateTheme[state],
      }}
      {...props}
    />
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /**
   * Button contents
   */
  onClick: PropTypes.func,
  /**
   * Whate state is the button in?
   */
  state: PropTypes.oneOf(["default", "hover", "focus", "disabled"]),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "default",
  onClick: undefined,
};
