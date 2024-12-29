import { getList, getPaths } from "../../../../../libs/microcms";
import { PER_PAGE } from "../../../../../libs/siteInfo";
import ArticlePagePresentation from "./ArticlePagePresentation";

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

    return <ArticlePagePresentation contents={contents} totalCount={totalCount} currentPage={id} />;
}
