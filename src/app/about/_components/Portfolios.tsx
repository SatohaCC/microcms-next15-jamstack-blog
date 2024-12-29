import { portfolioData } from "@/app/_data/portfolioData";

import { css } from "../../../../styled-system/css";
import PortfolioRow from "./PortfolioRow";

const headStyle = css({
    fontSize: { base: "md", md: "lg", lg: "lg" },
    fontWeight: "bold",
    color: "amber.11",
    py: "5",
});

const Portfolios = () => {
    return (
        <div>
            <h2 className={headStyle}>Portfolios</h2>
            <div>
                {portfolioData.map((data, index) => {
                    return <PortfolioRow key={index} data={data} />;
                })}
            </div>
        </div>
    );
};

export default Portfolios;
