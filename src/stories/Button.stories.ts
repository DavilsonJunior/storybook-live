import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: ["contained", "outlined"],
    },
    onClick: {
      action: "click",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Entrar",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: "Sair",
    color: "error",
  },
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
      },
    },
  },
};

export const LoadingButton: Story = {
  args: {
    variant: "contained",
    children: "Loading",
    color: "inherit",
    isLoading: true,
  },
};
