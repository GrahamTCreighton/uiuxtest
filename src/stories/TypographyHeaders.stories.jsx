import React from "react";
import { Header } from "components/TypographyHeaders";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Headers",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ["H1", "H2", "H4", "HighlightH1", "HighlightH2", "HighlightH4"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args}>Sample Text</Header>;

export const FillPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FillPrimary.args = {};
