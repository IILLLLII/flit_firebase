import { FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, NumberInput, NumberInputField, Radio, RadioGroup } from "@chakra-ui/react"

export const TextInput = ({ label, defaultValue, isRequired, ...props }) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <Input _disabled={{color:'black'}} disabled={props.disabled} defaultValue={defaultValue} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
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

export const DateInput = ({ label, isRequired, ...props }) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <Input type="date" placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
        </FormControl>
    )
}

export const MailInput = ({ label, isRequired, isError, ...props }) => {
    return (
        <FormControl isRequired={isRequired} isInvalid={isError}>
            <FormLabel>{label}</FormLabel>
            <Input type='email' onChange={(e) => props.onChange(e.target.value)} />
            {isError && <FormErrorMessage>정확한 이메일 주소를 입력하세요.</FormErrorMessage>}

        </FormControl>
    )
}