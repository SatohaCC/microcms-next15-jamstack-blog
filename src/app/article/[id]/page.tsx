import dayjs from "dayjs";
import "highlight.js/styles/a11y-dark.css";
import parse from "html-react-parser";
import { processer } from "microcms-richedit-processer";

import BackBtn from "@/_components/BackBtn/BackBtn";

import { client, getBlogPost } from "../../../../libs/microcms";
import { css } from "../../../../styled-system/css";
import { Box } from "../../../../styled-system/jsx";

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // IDを取得

    const content = await getBlogPost(id);

    // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
    const publishedAt = dayjs(content.publishedAt).format("YY.MM.DD");
    const updatedAt = dayjs(content.updatedAt).format("YY.MM.DD");

    const newContent = await processer(content.body, {
        code: { enabled: true },
        img: { lazy: false }, // srcのままにする設定。trueだとdata-srcに変換されてしまう。
    });

    return (
        <>
            <h1>{content.title}</h1> {/* タイトルを表示 */}
            <div>作成:{publishedAt}</div> {/* 日付を表示 */}
            <div>更新:{updatedAt}</div> {/* 日付を表示 */}
            <p className={css({ py: "5" })}>{content.summary}</p>
            {/* カテゴリーを表示 */}
            <div className={css({ pt: "5" })}>{parse(newContent)}</div>
            <Box pt={10}>
                <BackBtn />
            </Box>
        </>
    );
}

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: "articles" });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}
