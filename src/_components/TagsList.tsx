import Tag from "@/_ui/Tag/Tag";

import { HStack } from "../../styled-system/jsx";

type Props = {
    tags: string[];
};

const TagsList = ({ tags }: Props) => {
    return (
        <HStack mt="3" mb="3">
            {tags.map((tag, index) => {
                return (
                    <Tag key={index} visual={"outline"}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

export default TagsList;
