import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
    className: "button",
    base: {
        alignItems: "center",
        appearance: "none",
        borderRadius: "4px",
        cursor: "pointer",
        display: "inline-flex",
        fontWeight: "semibold",
        justifyContent: "center",
        minWidth: "0",
        outline: "none",
        position: "relative",
        transitionDuration: "normal",
        transitionProperty: "background, border-color, color, box-shadow",
        transitionTimingFunction: "default",
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
    },

    defaultVariants: {
        visual: "solid",
        size: "md",
    },

    variants: {
        visual: {
            solid: {
                borderWidth: "1px",
                borderColor: "button",
                background: "button",
                color: "neutral.100",
                _hover: {
                    background: "buttonHover",
                },
                _focus: {
                    background: "buttonActive",
                },
                _active: {
                    background: "buttonActive",
                },
                _disabled: {
                    cursor: "not-allowed",
                    opacity: "0.4",
                },
            },
            outline: {
                borderWidth: "1px",
                borderColor: "button",
                _hover: {
                    background: "button",
                },
                _disabled: {
                    borderColor: "border.disabled",
                    color: "fg.disabled",
                    cursor: "not-allowed",
                    _hover: {
                        background: "transparent",
                        borderColor: "border.disabled",
                        color: "fg.disabled",
                    },
                },
                _focusVisible: {
                    outlineOffset: "2px",
                    outline: "2px solid",
                    outlineColor: "border.outline",
                },
            },
        },
        size: {
            xs: {
                h: "8",
                minW: "8",
                textStyle: "xs",
                px: "3",
                gap: "2",
                "& svg": {
                    fontSize: "md",
                    width: "4",
                    height: "4",
                },
            },
            sm: {
                h: "9",
                minW: "9",
                textStyle: "sm",
                px: "3.5",
                gap: "2",
                "& svg": {
                    width: "4",
                    height: "4",
                },
            },
            md: {
                h: "10",
                minW: "10",
                textStyle: "md",
                px: "4",
                gap: "2",
                "& svg": {
                    width: "5",
                    height: "5",
                },
            },
            lg: {
                h: "11",
                minW: "11",
                textStyle: "md",
                px: "4.5",
                gap: "2",
                "& svg": {
                    width: "5",
                    height: "5",
                },
            },
            xl: {
                h: "12",
                minW: "12",
                textStyle: "xl",
                px: "5",
                gap: "2.5",
                "& svg": {
                    width: "5",
                    height: "5",
                },
            },
            "2xl": {
                h: "16",
                minW: "16",
                textStyle: "2xl",
                px: "7",
                gap: "3",
                "& svg": {
                    width: "6",
                    height: "6",
                },
            },
        },
    },
});
