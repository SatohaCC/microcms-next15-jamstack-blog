"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import Button from "../_ui/Button/Button";
const style = css({
    color: "textColor",
});

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Box textAlign="center" py={10} px={6}>
            <h1 className={style}>Something went wrong!</h1>

            <div className={css({ padding: "4" })} />

            <Button
                visual="solid"
                onPress={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </Box>
    );
}
