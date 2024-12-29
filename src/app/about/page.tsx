import { Divider, Stack } from "../../../styled-system/jsx";
import AboutMe from "./_components/AboutMe";
import Portfolios from "./_components/Portfolios";
import Qualifications from "./_components/Qualifications";

const page = () => {
    return (
        <Stack px={5}>
            <AboutMe />
            <Divider pb="5" />
            <Qualifications />
            <Divider pb="5" />
            <Portfolios />
        </Stack>
    );
};

export default page;
