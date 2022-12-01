import React from "react";
import { Tweets } from "../common/icons/icons";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Button {...args}>
    <Tweets />
    Sample
  </Button>
);

export const FillPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FillPrimary.args = {
  theme: "FillPrimary",
};
