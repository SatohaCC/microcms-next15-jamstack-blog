import { cva } from "../../../styled-system/css";

export const pageButton = cva({
    base: {
        alignItems: "center",
        appearance: "none",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "md",
        fontWeight: "semibold",
        h: "12",
        minWidth: "0",
        justifyContent: "center",
        rounded: "md",
        w: "12",
    },

    variants: {
        visual: {
            solid: {
                bg: "accent.default",
                color: "accent.fg",
                p: "2",
                justifyItems: "center",
                _hover: {
                    background: "accent.emphasized",
                },
                _focusVisible: {
                    outlineOffset: "2px",
                    outline: "2px solid",
                    outlineColor: "border.accent",
                },
            },
            outline: {
                color: "GrayText",
                borderWidth: "1px",
                borderColor: "border.default",
                _hover: {
                    background: "gray.a2",
                },
                _focusVisible: {
                    outlineOffset: "2px",
                    outline: "2px solid",
                    outlineColor: "border.outline",
                },
            },
        },
    },
});
