import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "h3",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "h2",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#00000",
};
