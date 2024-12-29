import { render, screen } from "@testing-library/react";

import Tag from "./Tag";

describe("Tagコンポーネント", () => {
    test("子要素の正しい表示", () => {
        render(<Tag>Child Content</Tag>);
        expect(screen.getByText("Child Content")).toBeInTheDocument();
    });
});
