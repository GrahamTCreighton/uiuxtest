/** @jsxImportSource @emotion/react */
import { Icon } from "components/Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components & Assets/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div css={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
    <Icon {...args} />
  </div>
);

export const mainIcons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
mainIcons.args = {
  size: "default",
};
