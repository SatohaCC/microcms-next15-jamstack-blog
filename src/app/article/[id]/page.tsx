import dayjs from 'dayjs';
import { client } from '../../../../libs/microcms';
import styles from './page.module.css'; // 追加

// ブログ記事の型定義
type Props = {
    id: string;
    title: string;
    body: string;
    publishedAt: string;
    category: { name: string };
};

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props> {
    const data: Props = await client.get({
        endpoint: `articles/${id}`,
    });
    return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // IDを取得
    console.log(id);
    const post = await getBlogPost(id);

    // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
    const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{post.title}</h1> {/* タイトルを表示 */}
            <div className={styles.date}>{formattedDate}</div> {/* 日付を表示 */}
            <div className={styles.category}>
                カテゴリー：{post.category && post.category.name}
            </div>{' '}
            {/* カテゴリーを表示 */}
            <div className={styles.post} dangerouslySetInnerHTML={{ __html: post.body }} />{' '}
            {/* 記事本文を表示 */}
        </main>
    );
}

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: 'articles' });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}