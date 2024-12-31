import ArticleList from "@/_ui/ArticleList/ArticleList";
import Pagination from "@/_ui/Pagination/Pagination";

import { getList } from "../../libs/microcms";

export const dynamic = "force-static";

export default async function Home() {
    const { contents, totalCount } = await getList({ limit: 5, offset: 0 });

    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={1} />
        </>
    );
}
