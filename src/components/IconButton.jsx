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
export const IconButton = ({ theme, size, iconName, ...props }) => {
  const themes = {
    FillPrimary: {
      color: brandPalette.dark,
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: brandPalette.darkAlpha5 },
      "&:active, &:focus-visible": {
        backgroundColor: brandPalette.darkAlpha5,
        outline: `3px solid ${brandPalette.darkAlpha20}`,
      },
    },
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
    <iconbutton type="button" css={[themes[theme], cssSizes[size]]} {...props}>
      <ChosenIcon />
    </iconbutton>
  );
};

IconButton.propTypes = {
  theme: PropTypes.oneOf(["FillPrimary"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["default"]),
  /**
   * Button contents
   */
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
};

IconButton.defaultProps = {
  theme: "FillPrimary",
  size: "default",
  iconName: "Clock",
};
