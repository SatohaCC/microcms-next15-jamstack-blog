import { defineRecipe } from "@pandacss/dev";

export const tagRecipe = defineRecipe({
    className: "tag",
    base: {
        display: "flex",
        fontWeight: "bold",
        cursor: "pointer",
        p: "1",
        fontSize: "xs",
    },
    defaultVariants: {
        visual: "outline",
    },
    variants: {
        visual: {
            outline: {
                borderWidth: "1px",
                borderColor: "gray.3",
                color: "gray.12",
                rounded: "md",
                shadow: "xs",
            },
        },
    },
});
