import ArticleList from "@/_components/ArticleList/ArticleList";

import { getList, getMenu, getPaths } from "../../../../../libs/microcms";
import { PAGINATION_REVALIDATE, PER_PAGE } from "../../../../../libs/siteInfo";
import PaginationContainer from "../../../../_ui/Pagination/PaginationContainer";

export const revalidate = PAGINATION_REVALIDATE;

export async function generateStaticParams() {
    const { contents, totalCount } = await getMenu();
    return getPaths({ contents, totalCount });
}

type Props = {
    params: Promise<{ category: string; page: string }>;
};

export default async function PageIndex(props: Props) {
    const params = await props.params;

    const { category, page } = params;

    const id = parseInt(page);
    const { contents, totalCount } = await getList({
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
        filters: `categories[contains]${category}`,
    });

    return (
        <>
            <ArticleList contents={contents} />
            <PaginationContainer totalCount={totalCount} category={category} currentPage={id} />
        </>
    );
}
