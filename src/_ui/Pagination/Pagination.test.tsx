import { render, screen } from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination コンポーネント", () => {
    it("ページ数が 1 ページのみのときはボタンが表示されない", () => {
        render(<Pagination totalCount={5} currentPage={1} category="article" />);
        expect(screen.queryByRole("button")).toBeNull();
    });

    it("ページ数が 2 ページ以上のときは複数のボタンが表示される", () => {
        render(<Pagination totalCount={6} currentPage={1} category="article" />);
        expect(screen.queryAllByRole("button").length).toBeGreaterThan(1);
    });

    it("ページ数が 6 ページのときは 6 つのボタンが表示される", () => {
        render(<Pagination totalCount={30} currentPage={3} category="article" />);
        expect(screen.queryAllByRole("button").length).toBe(6);
    });

    it("現在のページが中間のとき、前後に '・・・' が表示される", () => {
        render(<Pagination totalCount={100} currentPage={5} category="article" />);
        const ellipses = screen.getAllByText("・・・");
        expect(ellipses.length).toBe(2);
    });
});
