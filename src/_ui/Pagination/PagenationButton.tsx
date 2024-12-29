import Link from "next/link";

import { pageButton } from "./Pagenation.cva";

type Props = {
    page: number;
    category?: string;
    currentPage: number;
};
export const PaginationButton = ({ page, currentPage, category }: Props) => (
    <Link href={`/${category}/page/${page}`}>
        <button
            className={pageButton({
                visual: page === currentPage ? "currentPage" : "otherPages",
            })}
        >
            {page}
        </button>
    </Link>
);
