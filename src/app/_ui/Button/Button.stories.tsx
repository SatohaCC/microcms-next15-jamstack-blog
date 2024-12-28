import { within } from "@storybook/test";
import { expect, jest } from "@storybook/jest";

import { css } from "../../../../styled-system/css";
import { button } from "../../../../styled-system/recipes";
import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const fn = jest.fn();
const meta = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        visual: {
            options: button.variantMap.visual,
            control: { type: "radio" },
            description: "ボタンのスタイル",
            // table: {
            //     defaultValue: { summary: "solid" },
            // },
        },
        size: {
            options: button.variantMap.size,
            control: { type: "radio" },
            description: "ボタンのサイズ",

            // table: {
            //     defaultValue: { summary: "lg" },
            // },
        },
        isDisabled: {
            control: { type: "boolean" },
            description: "ボタンを無効にする",
            // table: {
            //     defaultValue: { summary: false },
            // },
        },
    },
    parameters: {
        nextjs: {
            router: {
                push: fn,
            },
        },
    },

    decorators: [
        (Story) => (
            <div className={css({ m: 5 })}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        visual: "solid",
        size: "lg",
        children: "ボタン",
    },
};

export const AllButtons = {
    render: () => {
        return (
            <div>
                <div>
                    <h2 className={css({ my: 2 })}>塗りボタン（Solid）</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Button visual="solid" size="lg">
                            Button
                        </Button>
                        <Button visual="solid" size="md">
                            Button
                        </Button>
                        <Button visual="solid" size="sm">
                            Button
                        </Button>
                        <Button visual="solid" size="xs">
                            Button
                        </Button>
                    </div>
                </div>
                <div>
                    <h2 className={css({ my: 2 })}>塗りボタン（Solid Disabled）</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Button visual="solid" size="lg" isDisabled>
                            Button
                        </Button>
                        <Button visual="solid" size="md" isDisabled>
                            Button
                        </Button>
                        <Button visual="solid" size="sm" isDisabled>
                            Button
                        </Button>
                        <Button visual="solid" size="xs" isDisabled>
                            Button
                        </Button>
                    </div>
                </div>
                <div>
                    <h2 className={css({ my: 2 })}>アウトラインボタン（Outline）</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Button visual="outline" size="lg">
                            Button
                        </Button>
                        <Button visual="outline" size="md">
                            Button
                        </Button>
                        <Button visual="outline" size="sm">
                            Button
                        </Button>
                        <Button visual="outline" size="xs">
                            Button
                        </Button>
                    </div>
                </div>
                <div>
                    <h2 className={css({ my: 2 })}>アウトラインボタン（Outline Disabled））</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Button visual="outline" size="lg" isDisabled>
                            Button
                        </Button>
                        <Button visual="outline" size="md" isDisabled>
                            Button
                        </Button>
                        <Button visual="outline" size="sm" isDisabled>
                            Button
                        </Button>
                        <Button visual="outline" size="xs" isDisabled>
                            Button
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
};

export const Solid: Story = {
    args: {
        ...button.raw({
            visual: "solid",
        }),
        children: "Button",
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        await step("ボタンにLabelの文字列が表示されている", async () => {
            await expect(canvas.getByText("Button")).toBeInTheDocument();
        });
    },
};

export const Outline: Story = {
    args: {
        ...button.raw({
            visual: "outline",
        }),
        children: "Button",
    },
};
export const Text: Story = {
    args: {
        ...button.raw({
            visual: "text",
        }),
        children: "Button",
    },
};
