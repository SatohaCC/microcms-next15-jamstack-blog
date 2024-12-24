import localFont from "next/font/local";

import { siteDescription, siteName } from "../../libs/siteInfo";

import type { Metadata } from "next";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: siteName,
    description: siteDescription,
};

export default function RootLayout({
    children,
}: Readonly<{
    // eslint-disable-next-line no-undef
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
        </html>
    );
}
