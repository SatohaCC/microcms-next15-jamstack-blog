import localFont from "next/font/local";
import { Suspense } from "react";

import { siteDescription, siteName } from "../../libs/siteInfo";
import { Box } from "../../styled-system/jsx";
import Header from "./Header";
import Loading from "./loading";
import Main from "./Main";

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
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Box>
                    <Header />
                    <Main>
                        <Suspense fallback={<Loading />}>{children}</Suspense>
                    </Main>
                </Box>
            </body>
        </html>
    );
}
