import Link from "next/link";

import { siteName } from "../../../../libs/siteInfo";
import { ParentCategoriesEntity } from "../../../../libs/types";
import { Box, Flex } from "../../../../styled-system/jsx";
import { flex } from "../../../../styled-system/patterns";
import { text } from "../../../../styled-system/recipes";

type Props = {
    contents: ParentCategoriesEntity[];
};

const DesktopNav = ({ contents }: Props) => {
    return (
        <Flex
            maxW="1280px"
            margin="0 auto"
            justifyContent={{ base: "space-between" }}
            alignItems="baseline"
        >
            <div className={text({ style: "title" })}>
                <Link href={"/"}>{siteName}</Link>
            </div>
            <Box display={{ base: "none", md: "contents" }}>
                <div className={flex({ gap: 6 })}>
                    {contents.map((menu) => {
                        return (
                            <div key={menu.id} className={text({ style: "menu" })}>
                                <Link href={`/${menu.id}/page/1`}>{menu.label}</Link>
                            </div>
                        );
                    })}
                </div>
            </Box>
            <div className={text({ style: "menu" })}>
                <Link href={"/about"}>Profile</Link>
            </div>
        </Flex>
    );
};

export default DesktopNav;
