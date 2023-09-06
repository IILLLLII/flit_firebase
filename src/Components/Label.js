import { Badge, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Body_sm, Title_sm } from "../Style/Typograhy"

export const Label = ({ title, description, text, children, ...props }) => {
    return (
        <HStack w='100%' m={3} alignItems={'flex-start'}>
            <Text w="90px" {...Title_sm}>{title}</Text>
            {description &&
            <Wrap maxW={'250px'}>
                {description.map((value) => (
                    <WrapItem>
                        <Badge whiteSpace={'pre-wrap'}>{value}</Badge>
                    </WrapItem>
                ))}
            </Wrap>
            }
            { text &&
                <Text maxW={'250px'} mx={-1} {...Body_sm}>{text}</Text>
            }
            {children && children}
        </HStack>
    )
}