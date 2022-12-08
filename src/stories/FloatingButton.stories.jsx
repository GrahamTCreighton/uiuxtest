import React from "react";
import { Tweets } from "common/icons";
import { FloatingButton } from "components/FloatingButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Floating Button",
  component: FloatingButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["default"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <FloatingButton {...args}>
    <Tweets />
  </FloatingButton>
);

export const IconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButton.args = {
  size: "default",
};
