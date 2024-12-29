import dayjs from "dayjs";
import "highlight.js/styles/a11y-dark.css";
import { processer } from "microcms-richedit-processer";

import { client, getBlogPost } from "../../../../libs/microcms";
import BlogPostPresentation from "./BlogPostPresentation";

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
        <BlogPostPresentation
            title={content.title}
            publishedAt={publishedAt}
            updatedAt={updatedAt}
            summary={content.summary || ""}
            body={newContent}
        />
    );
}

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: "articles" });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}
