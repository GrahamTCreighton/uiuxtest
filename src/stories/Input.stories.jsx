import React from "react";
import { InputForm } from "../components/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components & Assets/Input",
  component: InputForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { options: ["Empty", "Default", "Error"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputForm {...args} label />;

export const InputFormSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputFormSample.args = {};
