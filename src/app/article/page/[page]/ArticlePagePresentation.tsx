import ArticleList from "@/app/_components/ArticleList/ArticleList";

import Pagination from "../../../../_ui/Pagination/Pagination";

type Props = {
    contents: any[];
    totalCount: number;
    currentPage: number;
};

const ArticlePagePresentation = ({ contents, totalCount, currentPage }: Props) => {
    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={currentPage} />
        </>
    );
};

export default ArticlePagePresentation;
