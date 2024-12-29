"use client";

import { ReactNode } from "react";
import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";

import { button, type ButtonVariantProps } from "../../../styled-system/recipes";

type Props = ButtonVariantProps &
    RACButtonProps & {
        children: ReactNode;
    };

const Button = ({ children, visual, size, ...rest }: Props) => {
    return (
        <RACButton {...rest} className={button({ visual, size })}>
            {children}
        </RACButton>
    );
};

export default Button;
