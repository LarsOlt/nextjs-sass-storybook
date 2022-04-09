import Button from "./Button";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Button",
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
};
