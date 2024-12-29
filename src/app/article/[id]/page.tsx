import dayjs from "dayjs";

import { client } from "../../../../libs/microcms";
import { ArticleType } from "../../../../libs/types";

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<ArticleType> {
    const data: ArticleType = await client.get({
        endpoint: `articles/${id}`,
    });
    return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // IDを取得

    const post = await getBlogPost(id);

    // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
    const formattedDate = dayjs(post.publishedAt).format("YY.MM.DD");

    return (
        <main>
            <h1>{post.title}</h1> {/* タイトルを表示 */}
            <div>{formattedDate}</div> {/* 日付を表示 */}
            <div>
                カテゴリー：{post.categories[0].label} {/* カテゴリーを表示 */}
            </div>
            {/* カテゴリーを表示 */}
            <div dangerouslySetInnerHTML={{ __html: post.body }} /> {/* 記事本文を表示 */}
        </main>
    );
}

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: "articles" });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}
