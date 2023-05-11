import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "./";

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "body2"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: "Texto",
    variant: "h2",
    color: "red",
  },
};
