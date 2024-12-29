import ArticleList from "@/_components/ArticleList/ArticleList";

import PaginationContainer from "../../../../_ui/Pagination/PaginationContainer";

type Props = {
    contents: any[];
    totalCount: number;
    currentPage: number;
};

const ArticlePagePresentation = ({ contents, totalCount, currentPage }: Props) => {
    return (
        <>
            <ArticleList contents={contents} />
            <PaginationContainer totalCount={totalCount} currentPage={currentPage} />
        </>
    );
};

export default ArticlePagePresentation;
