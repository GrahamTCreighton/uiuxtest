import React from "react";
import { Tweets } from "common/icons";
import { IconButton } from "components/IconButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["default"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <IconButton {...args}>
    <Tweets />
  </IconButton>
);

export const IconButtonSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButtonSample.args = {
  size: "default",
};
