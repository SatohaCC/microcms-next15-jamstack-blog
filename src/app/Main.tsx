import React from "react";

import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";

type Props = {
    children: React.ReactNode;
};

const Main = ({ children }: Props) => {
    return (
        <Box
            className={css({
                maxW: "1280px",
                margin: "0 auto",
                p: "5",
            })}
        >
            {children}
        </Box>
    );
};

export default Main;
