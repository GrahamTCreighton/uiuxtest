/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import brandPalette from "common/colors/brandColors";
/**
 * Primary UI component for user interaction
 */
export const Header = ({ size, ...props }) => {
  const mainCss = {
    fontFamily: "IBM Plex Sans",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: brandPalette.dark,
  };

  const cssSizes = {
    H1: {
      fontWeight: "500",
      fontSize: "80px",
      letterSpacing: "-2px",
    },
    H2: {
      fontWeight: "500",
      fontSize: "64px",
      letterSpacing: "-1.5px",
    },
    H3: {
      fontWeight: "500",
      fontSize: "48px",
      letterSpacing: "-1px",
    },
    H4: {
      fontWeight: "500",
      fontSize: "32px",
      letterSpacing: "-0.5px",
    },
    HighlightH1: {
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "80px",
      letterSpacing: "-2px",
    },
    HighlightH2: {
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "64px",
      letterSpacing: "-1.5px",
    },
    HighlightH3: {
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "48px",
      letterSpacing: "-1px",
    },
    HighlightH4: {
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "32px",
      letterSpacing: "-0.5px",
    },
  };

  return <header css={[mainCss, cssSizes[size]]} {...props} />;
};

Header.propTypes = {
  size: PropTypes.oneOf([
    "H1",
    "H2",
    "H3",
    "H4",
    "HighlightH1",
    "HighlightH2",
    "HighlightH3",
    "HighlightH4",
  ]),
};

Header.defaultProps = {
  size: "H1",
};
