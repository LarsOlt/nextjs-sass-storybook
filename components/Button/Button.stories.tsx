import Button from "./Button";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

// FIXME: Templates render as blank page in storybook

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => Template.bind({});

export const Secondary = () => Template.bind({});

export const Third = () => <Button>Bla</Button>;

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};
