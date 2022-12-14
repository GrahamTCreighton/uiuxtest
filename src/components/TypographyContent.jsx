/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import brandPalette from "common/colors/brandColors";
/**
 * Primary UI component for user interaction
 */
export const Content = ({ size, as, ...props }) => {
  const mainCss = {
    fontFamily: "IBM Plex Sans",
    color: brandPalette.dark,
    margin: "0px",
  };

  const cssSizes = {
    subheader: {
      fontWeight: "400",
      fontSize: "18px",
      letterSpacing: "-0.1px",
    },
    bodyRegular: {
      fontWeight: "400",
      fontSize: "16px",
      letterSpacing: "-0.1px",
    },
    bodyMedium: {
      fontWeight: "500",
      fontSize: "16px",
      letterSpacing: "-0.1px",
    },
    bodySemiBold: {
      fontWeight: "600",
      fontSize: "16px",
      letterSpacing: "0.1px",
    },
  };
  const As = as;
  return <As css={[mainCss, cssSizes[size]]} {...props} />;
};

Content.propTypes = {
  size: PropTypes.oneOf([
    "subheader",
    "bodyRegular",
    "bodyMedium",
    "bodySemiBold",
  ]),
  as: PropTypes.oneOf(["div", "span", "p"]),
};

Content.defaultProps = {
  size: "subheader",
  as: "p",
};
