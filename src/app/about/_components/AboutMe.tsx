import Link from "next/link";

import { aboutData, iconsData } from "@/app/_data/aboutData";

import { myName } from "../../../../libs/siteInfo";
import { css, cva } from "../../../../styled-system/css";
import { Flex } from "../../../../styled-system/jsx";

const nameStyle = css({
    color: "amber.11",
    fontSize: { base: "3xl", md: "5xl", lg: "5xl" },
    fontWeight: "bold",
});

const iconStyle = cva({
    base: {
        fontSize: { base: "xl", md: "3xl", lg: "3xl" },
        pl: "5",
    },
    variants: {
        icon: {
            twitter: { color: "#1DA1F2" },
            github: { color: "#000000" },
        },
    },
});

const AboutMe = () => {
    return (
        <div>
            <Flex pb={3} alignItems="baseline">
                <h1 className={nameStyle}>{myName}</h1>
                {iconsData.map((icon) => {
                    return (
                        <Link
                            key={icon.id}
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={iconStyle({ icon: icon.title })}>{icon.icon}</div>
                        </Link>
                    );
                })}
            </Flex>
            <div>
                {aboutData.map((data, index) => {
                    return <p key={index}>{data.text}</p>;
                })}
            </div>
        </div>
    );
};

export default AboutMe;
