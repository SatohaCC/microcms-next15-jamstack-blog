import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
    className: "text",
    description: "The styles for the text",
    defaultVariants: {
        style: "text",
    },

    variants: {
        style: {
            title: {
                color: "textColor",
                fontSize: { base: "lg", md: "2xl" },
                fontFamily: "Roboto",
                padding: "3",
            },
            menu: {
                color: "textColor",
                fontSize: { base: "md", md: "lg" },
                fontFamily: "Roboto",
                padding: "2",
            },
            text: {
                color: "textColor",
                fontSize: { base: "lg", md: "xl" },
                fontFamily: "Roboto",
                padding: "3",
            },
        },
    },
});
