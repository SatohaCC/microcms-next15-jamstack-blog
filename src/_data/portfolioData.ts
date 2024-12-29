import { portfolioType } from "../../libs/types";

export const portfolioData: portfolioType[] = [
    {
        title: "Satoha's Blog　(このブログ)",
        url: "https://www.satoha.net/about",
        linkType: "_self",
        text: [
            "Next.js, panda css, TypeScript, microCMS",
            "WordPress以外でブログ作ってみたかった。",
        ],
    },
    {
        title: "Kanpo Mix Check",
        url: "https://kampo-mix-check-satohacc.vercel.app/",
        linkType: "_blank",
        text: [
            "Next.js, Chakra UI, TypeScript",
            "複数漢方の構成生薬の重複確認",
            "派生系の勉強にも",
            "react-tableの使い方がまだいまいち",
        ],
    },
    {
        title: "ゲームのdamage calculation",
        url: "https://damage-heaven.com/",
        linkType: "_blank",
        text: [
            "Next.js, Chakra UI, TypeScript, recoil",
            "某ソシャゲのダメージ計算サイト。計算式は5chから拝借。",
            "主にメモ化のお勉強に作成。",
            "台湾の方が巴哈姆特で紹介してくれたので中国語対応した。",
        ],
    },
];
