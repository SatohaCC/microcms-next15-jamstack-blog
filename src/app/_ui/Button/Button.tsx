"use client";

import { MouseEventHandler, ReactNode, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

import { button } from "../../../../styled-system/recipes";
import { RecipeVariantProps } from "../../../../styled-system/types";

type Props = AriaButtonProps &
    RecipeVariantProps<typeof button> & {
        children: ReactNode;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };

const Button = (props: Props) => {
    let { children, visual, size } = props;
    let ref = useRef<HTMLButtonElement | null>(null);
    let { buttonProps } = useButton(props, ref);

    return (
        <button {...buttonProps} ref={ref} className={button({ visual, size })}>
            {children}
        </button>
    );
};

export default Button;
