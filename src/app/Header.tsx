import DesktopNav from "@/_components/DeskTopNav/DesktopNav";

import { getMenu } from "../../libs/microcms";
import { MENU_REVALIDATE } from "../../libs/siteInfo";
import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";

export const revalidate = MENU_REVALIDATE;

const Header = async () => {
    const { contents } = await getMenu();
    return (
        <header>
            <Box
                className={css({
                    w: "100%",
                    top: 0,
                    position: "sticky",
                    zIndex: 1,
                    borderBottomWidth: "1px",
                    borderBottomColor: "gray.200",
                    shadow: "sm",
                })}
                zIndex={200}
            >
                <DesktopNav contents={contents} />
            </Box>
        </header>
    );
};

export default Header;
