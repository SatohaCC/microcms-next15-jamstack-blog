import { qualificationsData } from "@/app/_data/qualificationsData";

import { css } from "../../../../styled-system/css";
import { grid } from "../../../../styled-system/patterns";

const headStyle = css({
    fontSize: { base: "md", md: "lg", lg: "lg" },
    fontWeight: "bold",
    color: "amber.11",
    py: "5",
});

const Qualifications = () => {
    return (
        <div>
            <h2 className={headStyle}>資格</h2>
            <div className={grid({ columns: 2, gap: "1" })}>
                {qualificationsData.map((data, index) => {
                    return <p key={index}>{data.text}</p>;
                })}
            </div>
        </div>
    );
};

export default Qualifications;
