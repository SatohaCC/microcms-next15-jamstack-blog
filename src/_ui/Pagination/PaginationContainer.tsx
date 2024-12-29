import { PER_PAGE } from "../../../libs/siteInfo";
import Pagination from "./Pagination";

type Props = {
    totalCount: number;
    category?: string;
    currentPage: number;
};

const PaginationContainer = ({ totalCount, category = "article", currentPage }: Props) => {
    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
    const pages = range(1, Math.ceil(totalCount / PER_PAGE));
    const topPage = 1;
    const lastPage = pages[pages.length - 1];
    const calculatePagesToRender = (
        pageList: number[],
        topPage: number,
        lastPage: number,
        currentPage: number
    ) => {
        return pageList.filter((page) => {
            return (
                page !== topPage &&
                page !== lastPage &&
                page >= currentPage - 2 &&
                page <= currentPage + 2
            );
        });
    };

    const pagesToRender = calculatePagesToRender(pages, topPage, lastPage, currentPage);
    return (
        <Pagination
            topPage={topPage}
            lastPage={lastPage}
            pageList={pagesToRender}
            currentPage={currentPage}
            category={category}
        />
    );
};
export default PaginationContainer;
