import React from "react";
import { Tweets } from "common/icons";
import { Button } from "components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["small", "default", "large"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Button {...args}>
    <Tweets /> Sample
  </Button>\
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
