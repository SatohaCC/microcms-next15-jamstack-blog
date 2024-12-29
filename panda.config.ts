import { defineConfig } from "@pandacss/dev";

import { buttonRecipe } from "@/_ui/Button/Button.recipe";
import { textRecipe } from "@/_ui/Text/Text.recipe";

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
                text: textRecipe,
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
                    textColor: { value: "#0c0a09" },
                    textColorHover: { value: "#0d9488" },
                    textColorActive: { value: "#0f766e" },
                },
            },
        },
    },

    globalCss: {
        html: {
            h: "full",
            overflowY: "scroll",
        },
        body: {
            marginTop: "0",
        },
        fonts: {
            body: "system-ui, sans-serif",
            mono: "Menlo, monospace",
        },
        a: {
            color: "ruby.11",
            _hover: { color: "textColorHover", textDecoration: "none" },
            _active: { color: "textColorActive" },
            _focus: { color: "textColorActive" },
            cursor: "pointer",
        },
        h1: {
            fontSize: { base: "2xl", md: "3xl" },
            fontWeight: "600",
            pb: "2",
            mb: "5",
        },
        h2: {
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "600",
        },
        h3: {
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "600",
        },
        p: {
            fontSize: { base: "lg", md: "xl" },
            lineHeight: "tall",
            letterSpacing: "normal",
        },
        ol: {
            listStyleType: "decimal",
            listStylePosition: "inside",
        },
        blockquote: {
            m: "20px",
            pl: "10px",
            borderLeftWidth: "4px",
            borderLeftColor: "#f86c3d",
        },
    },
    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
