import { Center, HStack } from "../../../styled-system/jsx";
import { PaginationButton } from "./PagenationButton";

type Props = {
    topPage: number;
    lastPage: number;
    pageList: number[];
    currentPage: number;
    category: string;
};

const Pagination = ({ topPage, lastPage, pageList, currentPage, category }: Props) => {
    if (lastPage === 1) {
        return (
            <Center p={5}>
                <HStack>
                    <PaginationButton
                        page={topPage}
                        currentPage={currentPage}
                        category={category}
                    />
                </HStack>
            </Center>
        );
    }

    return (
        <Center p={5}>
            <HStack>
                <PaginationButton page={topPage} currentPage={currentPage} category={category} />
                {currentPage > 3 && <div>・・・</div>}
                {pageList.map((page, index) => (
                    <PaginationButton
                        key={index}
                        page={page}
                        currentPage={currentPage}
                        category={category}
                    />
                ))}
                {currentPage < lastPage - 2 && <div>・・・</div>}
                <PaginationButton page={lastPage} currentPage={currentPage} category={category} />
            </HStack>
        </Center>
    );
};

export default Pagination;
