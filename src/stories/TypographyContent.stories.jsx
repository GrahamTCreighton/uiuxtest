import React from "react";
import { Content } from "components/TypographyContent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Typography/Content",
  component: Content,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ["subheader", "bodyRegular", "bodyMedium", "bodySemiBold"],
    },
    as: {
      options: ["span", "p", "div"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Content {...args}>Sample Text</Content>;

export const ContentSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContentSample.args = {};
