import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

import { portfolioType } from "../../../../libs/types";
import { css } from "../../../../styled-system/css";
import { Flex } from "../../../../styled-system/jsx";

const titleStyle = css({
    fontSize: { base: "md", md: "lg", lg: "lg" },
    fontWeight: "bold",
});

type Props = {
    data: portfolioType;
};

const PortfolioRow = ({ data }: Props) => {
    return (
        <div>
            <Link href={data.url} target={data.linkType} rel="noopener noreferrer">
                <Flex alignItems="baseline">
                    <h3 className={titleStyle}>{data.title}</h3>
                    {data.linkType === "_blank" && <RiExternalLinkLine />}
                </Flex>
            </Link>

            {data.text.map((text, index) => {
                return (
                    <p key={index} className={css({ pl: "3" })}>
                        {text}
                    </p>
                );
            })}
        </div>
    );
};

export default PortfolioRow;
