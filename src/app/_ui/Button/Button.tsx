"use client";

import { ReactNode, useRef } from "react";
import { type AriaButtonProps, useButton } from "react-aria";

import { button, type ButtonVariantProps } from "../../../../styled-system/recipes";

type Props = AriaButtonProps &
    ButtonVariantProps & {
        children: ReactNode;
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
