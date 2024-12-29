import { ReactNode } from "react";

import { type RecipeVariantProps } from "../../../styled-system/css";
import { tag } from "../../../styled-system/recipes";

type Props = {
    children: ReactNode;
    // eslint-disable-next-line no-undef
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & RecipeVariantProps<typeof tag>;

const Tag = (props: Props) => {
    const { children, visual } = props;
    return (
        <button {...props} className={tag({ visual })}>
            {children}
        </button>
    );
};

export default Tag;
