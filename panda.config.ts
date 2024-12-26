import { defineConfig } from "@pandacss/dev";

import { buttonRecipe } from "@/app/_ui/Button/Button.recipe";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/_ui/**/*.{ts,tsx,js,jsx}",
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
        },
    },

    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
