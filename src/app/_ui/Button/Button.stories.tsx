import { css } from "../../../../styled-system/css";
import { button } from "../../../../styled-system/recipes";
import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        visual: {
            options: button.variantMap.visual,
            control: { type: "radio" },
            description: "ボタンのスタイル",
        },
        size: {
            options: button.variantMap.size,
            control: { type: "radio" },
            description: "ボタンのサイ。",
        },
    },
    decorators: [
        (Story) => (
            <div className={css({ m: 10 })}>
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
            <div className="flex flex-col gap-8">
                <div>
                    <h2>塗りボタン（Solid Fill）</h2>
                    <div className={css({ display: "flex", gap: 4 })}>
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
                    <h2>塗りボタン（Solid Disabled）</h2>
                    <div className={css({ display: "flex", gap: 4 })}>
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
                    <h2>アウトラインボタン（Outline）</h2>
                    <div className={css({ display: "flex", gap: 4 })}>
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
                    <h2>アウトラインボタン（Outline Disabled））</h2>
                    <div className={css({ display: "flex", gap: 4 })}>
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
};

export const SolidDiSabled: Story = {
    args: {
        ...button.raw({
            visual: "solid",
        }),
        children: "Button",
        isDisabled: true,
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

export const OutlineDiSabled: Story = {
    args: {
        ...button.raw({
            visual: "outline",
        }),
        children: "Button",
        isDisabled: true,
    },
};