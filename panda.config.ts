import { defineConfig } from "@pandacss/dev";

import { buttonRecipe } from "@/_ui/Button/Button.recipe";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/_ui/**/*.{ts,tsx,js,jsx}",
        "./src/_ui/**/*.stories.{ts,tsx,js,jsx}",

        "./src/**/*.{ts,tsx,js,jsx}",
        "./pages/**/*.{ts,tsx,js,jsx}",
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            recipes: {
                button: buttonRecipe,
            },
            tokens: {
                colors: {
                    primary: { value: "#0FEE0F" },
                    secondary: { value: "#EE0F0F" },
                    button: { value: "#0f766e" },
                    buttonHover: { value: "#115e59" },
                    buttonActive: { value: "#134e4a" },
                    buttonText: { value: "#f5f5f5" },
                    buttonOutlineHover: { value: "#f0fdfa" },
                    buttonOutlineActive: { value: "#ccfbf1" },
                    background: { value: "#f9f4ef" },
                    textColor: { value: "#000" },
                },
            },
        },
    },

    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
