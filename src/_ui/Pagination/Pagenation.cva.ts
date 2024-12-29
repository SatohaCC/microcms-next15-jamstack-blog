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
            currentPage: {
                bg: "teal.600",
                color: "white",
                p: "2",
                justifyItems: "center",
            },
            otherPages: {
                color: "gray.500",
                borderWidth: "1px",
                borderColor: "gray.500",
                _hover: {
                    color: "gray.700",
                    borderColor: "gray.700",
                },
                _focus: {
                    outlineOffset: "2px",
                    outline: "2px solid",
                    outlineColor: "gray.700",
                },
            },
        },
    },
});
