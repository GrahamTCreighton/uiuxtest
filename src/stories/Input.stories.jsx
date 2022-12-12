import React from "react";
import { Input } from "../components/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["Empty", "Default", "Error"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const IconButtonSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButtonSample.args = {};
