/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import brandPalette from "common/colors/brandColors";
import {
  Clock,
  Calendar,
  Close,
  Danger,
  Edit,
  Globe,
  Trash,
  Tweets,
  Twitter,
} from "common/icons";

/**
 * Primary UI component for user interaction
 */

export const Icon = ({ size, iconName, ...props }) => {
  const mainCss = {
    color: brandPalette.dark,
  };
  const icons = {
    Clock,
    Calendar,
    Close,
    Danger,
    Edit,
    Globe,
    Trash,
    Tweets,
    Twitter,
  };
  const ChosenIcon = icons[iconName];
  const cssSizes = {
    small: {
      svg: { height: "10.67px" },
    },
    default: {
      svg: { height: "16px" },
    },
  };

  return (
    <div css={[mainCss, cssSizes[size]]} {...props}>
      <ChosenIcon />
    </div>
  );
};

Icon.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "default"]),
  iconName: PropTypes.oneOf([
    "Clock",
    "Calendar",
    "Close",
    "Danger",
    "Edit",
    "Globe",
    "Trash",
    "Tweets",
    "Twitter",
  ]),
  /**
   * Button contents
   */
};

Icon.defaultProps = {
  size: "default",
  iconName: "Clock",
};
