import parse from "html-react-parser";

import BackBtn from "@/_components/BackBtn/BackBtn";

import { css } from "../../../../styled-system/css";
import { Box } from "../../../../styled-system/jsx";

type Props = {
    title: string;
    publishedAt: string;
    updatedAt: string;
    summary?: string;
    body: string;
};

export default function BlogPostPresentation({
    title,
    publishedAt,
    updatedAt,
    summary,
    body,
}: Props) {
    return (
        <>
            <h1>{title}</h1>
            <div>作成:{publishedAt}</div>
            <div>更新:{updatedAt}</div>
            <p className={css({ py: "5" })}>{summary}</p>
            <div className={css({ pt: "5" })}>{parse(body)}</div>
            <Box pt={10}>
                <BackBtn />
            </Box>
        </>
    );
}
