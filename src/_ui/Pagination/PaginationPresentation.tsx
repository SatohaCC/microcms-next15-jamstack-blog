import { Center, HStack } from "../../../styled-system/jsx";
import { PaginationButton } from "./PaginationButton";

type Props = {
    topPage: number;
    lastPage: number;
    pageList: number[];
    currentPage: number;
    category: string;
};

const Pagination = ({ topPage, lastPage, pageList, currentPage, category }: Props) => {
    return (
        <Center p={5}>
            <HStack>
                <PaginationButton page={topPage} currentPage={currentPage} category={category} />
                {lastPage > 1 && currentPage > 3 && <div>・・・</div>}
                {pageList.map((page, index) => (
                    <PaginationButton
                        key={index}
                        page={page}
                        currentPage={currentPage}
                        category={category}
                    />
                ))}
                {lastPage > 1 && currentPage < lastPage - 2 && <div>・・・</div>}
                {lastPage > 1 && (
                    <PaginationButton
                        page={lastPage}
                        currentPage={currentPage}
                        category={category}
                    />
                )}
            </HStack>
        </Center>
    );
};

export default Pagination;
