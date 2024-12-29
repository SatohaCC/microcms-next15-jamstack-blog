import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-coverage",
            options: {
                istanbul: {
                    exclude: ["node_modules/**", "**/styled-system/**"],
                },
            },
        },
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
};

export default config;
