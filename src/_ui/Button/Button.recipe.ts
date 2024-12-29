import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
    className: "button",
    description: "The styles for the Button component",
    jsx: ["Button"],
    base: {
        alignItems: "center",
        appearance: "none",
        borderRadius: "4",
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
                    _hover: {
                        background: "button",
                    },
                    _focus: {
                        background: "button",
                    },
                    _active: {
                        background: "button",
                    },
                },
            },
            outline: {
                borderWidth: "1px",
                borderColor: "button",
                background: "none",
                _hover: {
                    background: "buttonOutlineHover",
                },
                _focus: {
                    background: "buttonOutlineActive",
                },
                _active: {
                    background: "buttonOutlineActive",
                },
                _disabled: {
                    cursor: "not-allowed",
                    opacity: "0.4",
                    _active: {
                        background: "none",
                    },
                    _hover: {
                        background: "none",
                    },
                    _focus: {
                        background: "none",
                    },
                },
            },
            text: {
                color: "button",
                textDecoration: "underline",
                textUnderlineOffset: "auto",
                _hover: {
                    background: "buttonOutlineHover",
                },
                _focus: {
                    background: "buttonOutlineActive",
                },
                _active: {
                    background: "buttonOutlineActive",
                },
                _disabled: {
                    cursor: "not-allowed",
                    opacity: "0.4",
                    _hover: {
                        background: "button",
                    },
                    _focus: {
                        background: "button",
                    },
                    _active: {
                        background: "button",
                    },
                },
            },
        },
        size: {
            lg: {
                h: "11",
                minW: "11",
                textStyle: "md",
                px: "5",
                gap: "3",
                "& svg": {
                    width: "5",
                    height: "5",
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
        },
    },
});
