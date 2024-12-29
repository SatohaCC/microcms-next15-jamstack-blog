import { defineConfig } from "@pandacss/dev";

import { buttonRecipe } from "@/_ui/Button/Button.recipe";
import { tagRecipe } from "@/_ui/Tag/Tag.recipe";
import { textRecipe } from "@/_ui/Text/Text.recipe";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/_ui/**/*.{ts,tsx,js,jsx}",
        "./src/_ui/**/*.stories.{ts,tsx,js,jsx}",

        "./src/**/*.{ts,tsx,js,jsx}",
        "./pages/**/*.{ts,tsx,js,jsx}",
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            recipes: {
                button: buttonRecipe,
                text: textRecipe,
                tag: tagRecipe,
            },
            tokens: {
                colors: {
                    primary: { value: "#0FEE0F" },
                    secondary: { value: "#EE0F0F" },
                    button: { value: "#0f766e" },
                    buttonHover: { value: "#115e59" },
                    buttonActive: { value: "#134e4a" },
                    buttonText: { value: "#f5f5f5" },
                    buttonOutlineHover: { value: "#f0fdfa" },
                    buttonOutlineActive: { value: "#ccfbf1" },
                    background: { value: "#f9f4ef" },
                    textColor: { value: "#0c0a09" },
                    textColorHover: { value: "#0d9488" },
                    textColorActive: { value: "#0f766e" },
                },
            },
        },
    },

    globalCss: {
        html: {
            h: "full", // 高さ100%
            overflowY: "scroll", // 縦スクロールを常に表示
        },
        body: {
            marginTop: "0", // body の上マージンをリセット
        },
        fonts: {
            body: "system-ui, sans-serif", // 本文用フォント
            mono: "Menlo, monospace", // コード用フォント
        },
        a: {
            color: "textColor", // リンクの色
            _hover: { color: "textColorHover", textDecoration: "none" }, // ホバー時の色と下線
            _active: { color: "textColorActive" }, // アクティブ時の色
            _focus: { color: "textColorActive" }, // フォーカス時の色
            cursor: "pointer", // カーソルをポインターに
        },
        h1: {
            fontSize: { base: "xl", md: "2xl" }, // 見出し1のフォントサイズ（モバイルとデスクトップで変更）
            fontWeight: "600", // 見出し1の太さ
            pb: "2", // 見出し1の下パディング
            mb: "5", // 見出し1の下マージン
        },
        h2: {
            fontSize: { base: "xl", md: "xl" }, // 見出し2のフォントサイズ
            fontWeight: "500", // 見出し2の太さ
        },
        h3: {
            fontSize: { base: "xl", md: "xl" }, // 見出し3のフォントサイズ
            fontWeight: "500", // 見出し3の太さ
        },
        p: {
            fontSize: { base: "lg", md: "xl" }, // 段落のフォントサイズ（モバイルとデスクトップで変更）
            lineHeight: "tall", // 行の高さ
            letterSpacing: "normal", // 字間
        },
        ol: {
            listStyleType: "decimal", // 番号付きリストのスタイル
            listStylePosition: "inside", // リストの位置
        },
        blockquote: {
            m: "20px", // 引用部分のマージン
            pl: "10px", // 引用部分の左パディング
            borderLeftWidth: "4px", // 引用部分の左ボーダー幅
            borderLeftColor: "#f86c3d", // 引用部分の左ボーダー色
        },
    },
    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
