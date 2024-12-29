import ArticleList from "@/_components/ArticleList";
import PaginationContainer from "@/_ui/Pagination/PaginationContainer";

import { getList } from "../../libs/microcms";
import { PAGINATION_REVALIDATE } from "../../libs/siteInfo";

export const revalidate = PAGINATION_REVALIDATE;
export const dynamic = "force-static";

export default async function Home() {
    const { contents, totalCount } = await getList({ limit: 5, offset: 0 });

    return (
        <>
            <ArticleList contents={contents} />
            <PaginationContainer totalCount={totalCount} currentPage={1} />
        </>
    );
}
