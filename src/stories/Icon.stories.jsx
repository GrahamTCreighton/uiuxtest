import React from "react";
import { Tweets } from "../common/icons/icons";
import { Icon } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["small", "default"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Icon {...args}>
    <Tweets />
    Sample
  </Icon>
);

export const FillPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FillPrimary.args = {
  theme: "FillPrimary",
};
export const Disabled = Template.bind({});
Disabled.args = {
  theme: "Disabled",
};
export const Hover = Template.bind({});
Hover.args = {
  theme: "Hover",
};
export const Focus = Template.bind({});
Focus.args = {
  theme: "Focus",
};
