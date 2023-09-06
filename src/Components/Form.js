import { SearchIcon } from "@chakra-ui/icons"
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, InputGroup, InputRightAddon, NumberInput, NumberInputField, Radio, RadioGroup, Select } from "@chakra-ui/react"

export const TextInput = ({ label, defaultValue, isRequired, ...props }) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <Input bgColor='white' _disabled={{ color: 'black' }} disabled={props.disabled} defaultValue={defaultValue} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
        </FormControl>
    )
}

export const RadioInput = ({ label, defaultValue, isRequired, list, ...props }) => {
    return (
        <FormControl as='fieldset' isRequired={isRequired}>
            <FormLabel as='legend'>
                {label}
            </FormLabel>
            <RadioGroup defaultValue={defaultValue} onChange={(value) => props.onChange(value)}>
                <HStack spacing='24px'>
                    {list.map((value, index) => (
                        <Radio colorScheme="red" value={value}>{value}</Radio>
                    ))}
                </HStack>
            </RadioGroup>
            {/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
        </FormControl>
    )
}

export const DateInput = ({ label, isRequired, defaultValue, ...props }) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <Input type="date" defaultValue={defaultValue} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
        </FormControl>
    )
}

export const MailInput = ({ label, isRequired, defaultValue, isError, ...props }) => {
    return (
        <FormControl isRequired={isRequired} isInvalid={isError}>
            <FormLabel>{label}</FormLabel>
            <Input type='email' defaultValue={defaultValue} onChange={(e) => props.onChange(e.target.value)} />
            {isError && <FormErrorMessage>정확한 이메일 주소를 입력하세요.</FormErrorMessage>}

        </FormControl>
    )
}

export const SearchInput = ({ label, defaultValue, isRequired, option, ...props }) => {
    return (
        <InputGroup >
            <Select defaultValue={props.defaultType} onChange={(value) => props.onSetField(value)}>
                {option.map((val) => (
                    <option value={val}>{val}</option>
                ))}
            </Select>
            <Input defaultValue={defaultValue} onChange={(e) => props.onChange(e.target.value)} placeholder="검색어를 입력하세요."></Input>
            <InputRightAddon bgColor={'red.500'}>
                <SearchIcon color={'white'} />
            </InputRightAddon>
        </InputGroup>
    )
}