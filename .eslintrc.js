module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "import", "prettier"], // 'prettier' を削除
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "next/core-web-vitals",
        "plugin:storybook/recommended",
    ],
    rules: {
        // Reactルール
        "react/react-in-jsx-scope": "off", // React 17+ では必要ない
        "react/jsx-uses-react": "off", // React 17+ では必要ない
        "react/prop-types": "off", // TypeScript で型定義するため

        // Importルール
        "import/order": [
            "warn", // エラーではなく警告にする
            {
                groups: [
                    ["builtin", "external"], // ビルトインと外部モジュール
                    "internal", // プロジェクト内部モジュール
                    ["parent", "sibling", "index"], // 親、兄弟、インデックスファイル
                    "object", // objectなどのimport
                    "type", // type のimport
                ],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "internal",
                        position: "before",
                    },
                ],
                "newlines-between": "always", // グループ間に空行を強制
            },
        ],
        "import/no-unresolved": "error", // 解決できないインポートにエラーを出す

        // Prettierとの統合を削除
        // 'prettier/prettier': 'warn', // この行を削除

        // その他
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-debugger": "warn",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "function" }, // 関数定義の前に空行
            { blankLine: "always", prev: "function", next: "*" }, // 関数定義の後に空行
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"], // 拡張子の指定
            },
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json", //typescript設定を使う場合
            },
        },
    },
};
