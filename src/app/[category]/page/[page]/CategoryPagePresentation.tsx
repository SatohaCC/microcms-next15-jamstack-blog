import ArticleList from "@/_ui/ArticleList/ArticleList";

import Pagination from "../../../../_ui/Pagination/Pagination";

type Props = {
    contents: any[];
    totalCount: number;
    currentPage: number;
    category: string;
};

const CategoryPagePresentation = ({ contents, totalCount, currentPage, category }: Props) => {
    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={currentPage} category={category} />
        </>
    );
};

export default CategoryPagePresentation;
