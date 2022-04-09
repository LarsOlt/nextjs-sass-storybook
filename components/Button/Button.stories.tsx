import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: any) => <Button {...args}>Button</Button>;

export const Primary = () => Template.bind({});

Primary.args = {
  version: "primary",
};

export const Secondary = () => <Button version="secondary">Text</Button>;
