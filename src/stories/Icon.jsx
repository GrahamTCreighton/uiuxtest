/** @jsxImportSource @emotion/react */
import PropTypes, { func } from "prop-types";
import brandPalette from "../common/colors/brandColors";
/**
 * Primary UI component for user interaction
 */
export const Icon = ({ size, ...props }) => {
  const mainCss = {
    width: "24px",
    height: "24px",
    flex: "none",
    color: brandPalette.dark,
  };

  const cssSizes = {
    small: {
      width: "10.67px",
      height: "10.67px",
    },
    default: {
      width: "16px",
      height: "16px",
    },
  };

  return (
    <icon
      type="icon"
      css={{
        ...mainCss,
        ...cssSizes[size],
      }}
      {...props}
    />
  );
};

Icon.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "default"]),
  /**
   * Button contents
   */
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: "default",
  onClick: undefined,
};
