import ArticleList from "@/_components/ArticleList/ArticleList";

import { getList, getPaths } from "../../../../../libs/microcms";
import { PAGINATION_REVALIDATE, PER_PAGE } from "../../../../../libs/siteInfo";
import PaginationContainer from "../../../../_ui/Pagination/PaginationContainer";

export const revalidate = PAGINATION_REVALIDATE;

export async function generateStaticParams() {
    const { totalCount } = await getList();
    return getPaths({ totalCount });
}

type Props = {
    params: Promise<{ page: string }>;
};

export default async function PageIndex(props: Props) {
    const params = await props.params;

    const { page } = params;

    const id = parseInt(page);
    const { contents, totalCount } = await getList({
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
    });

    return (
        <>
            <ArticleList contents={contents} />
            <PaginationContainer totalCount={totalCount} currentPage={id} />
        </>
    );
}
