import { render, screen } from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination コンポーネント", () => {
    it("ページ数が 1 ページのみのときは表示されない", () => {
        render(<Pagination totalCount={5} currentPage={1} category="article" />);
        expect(screen.queryByRole("navigation")).toBeNull();
    });
});
