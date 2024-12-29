import { createClient, MicroCMSContentId, MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";

import { PER_PAGE } from "./siteInfo";
import { ArticleType, ParentCategoriesEntity } from "./types";

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// Client SDKの初期化を行う
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<ArticleType>({
        endpoint: "articles",
        queries,
    });

    return listData;
};

// ブログの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<ArticleType>({
        endpoint: "articles",
        contentId,
        queries,
    });

    return detailData;
};

// 親カテゴリを取得してメニューの項目として使う
export const getMenu = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<ParentCategoriesEntity>({
        endpoint: "parent",
        queries,
    });

    return listData;
};

const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

type getPathsProps = {
    contents?: (ParentCategoriesEntity & MicroCMSContentId & MicroCMSDate)[];
    totalCount: number;
};

// ページネーション用のパスを生成する
export const getPaths = ({ contents = [], totalCount }: getPathsProps) => {
    const totalPages = Math.ceil(totalCount / PER_PAGE);

    const paths =
        contents.length === 0
            ? range(2, totalPages).map((num) => ({ page: `${num}` }))
            : contents.map((cate) =>
                  range(1, totalPages).map((num) => ({
                      page: `${cate.label}/page/${num}`,
                  }))
              );
    return paths;
};
