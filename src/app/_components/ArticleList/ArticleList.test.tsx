import { render, screen } from "@testing-library/react";

import { ArticleType } from "../../../../libs/types";
import ArticleList from "./ArticleList";

// Testデータの作成
const categories = [
    {
        id: "101",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z",
        publishedAt: "2023-01-01T00:00:00Z",
        revisedAt: "2023-01-01T00:00:00Z",
        label: "カテゴリ1",
        href: "/category1",
    },
    {
        id: "102",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z",
        publishedAt: "2023-01-01T00:00:00Z",
        revisedAt: "2023-01-01T00:00:00Z",
        label: "カテゴリ2",
        href: "/category2",
        subLabel: "サブカテゴリ",
    },
];

const mockContents: ArticleType[] = [
    {
        id: "1",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z",
        publishedAt: "2023-01-01T00:00:00Z",
        revisedAt: "2023-01-01T00:00:00Z",
        title: "テスト記事",
        summary: "これはテスト記事の要約です。",
        body: "これはテスト記事の本文です。",
        categories: categories,
        img: {
            url: "https://example.com/image.jpg",
            height: 300,
            width: 500,
        },
    },
    {
        id: "2",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z",
        publishedAt: "2023-01-01T00:00:00Z",
        revisedAt: "2023-01-01T00:00:00Z",
        title: "テスト1",
        summary: "これはテスト記事1の要約です。",
        body: "これはテスト記事1の本文です。",
        categories: categories,
        img: {
            url: "https://example.com/image.jpg",
            height: 300,
            width: 500,
        },
    },
];

describe("ArticleList Component", () => {
    test("contentsが空の場合はNo contentsを表示", () => {
        render(<ArticleList contents={[]} />);
        const list = screen.queryByRole("list");
        expect(list).not.toBeInTheDocument();
        expect(list).toBeNull();
        expect(screen.getByText("No contents")).toBeInTheDocument();
    });

    test("contentsがある場合", () => {
        render(<ArticleList contents={mockContents} />);
        expect(screen.getByText("テスト記事")).toBeInTheDocument();
        expect(screen.getByText("テスト1")).toBeInTheDocument();
    });
    test("contentsの数だけ一覧表示される", () => {
        render(<ArticleList contents={mockContents} />);
        expect(screen.getAllByRole("listitem")).toHaveLength(mockContents.length);
    });
});
