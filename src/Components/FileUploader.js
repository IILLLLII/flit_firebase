import { Stack, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef } from "react";
import { storage } from "../DB/firebase-config";
import { getPath } from "../DB/function";

export function FileUploader({ isRequired, label, file, ...props }) {
    const imageInputRef = useRef();
    const handleClick = () => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    }

    const uploadFile = (file) => {
        if (file == null) return "";
        var url = file.name;

        const imageRef = ref(storage, `${url}`)

        uploadBytes(imageRef, file).then((snapshot) => {
            // 업로드 되자마자 뜨게 만들기
            getDownloadURL(snapshot.ref).then((imageUrl) => {
                props.setUrl(imageUrl);
            });
        })
    }

    // const reset = () => {
    //     props.setUrl("");
    // }

    return (
        <FormControl id="userName" isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <Stack direction={['column', 'row']}>
                <Input borderColor={'#d9d9d9'}defaultValue={getPath(file)} disabled={true} _disabled={{ color: 'black' }} placeholder={`${label} (${props.accept} 첨부)`} />
                <Button onClick={() => handleClick()}>첨부파일</Button>
                <Button as={'a'} href={file}>미리보기</Button>
                <input
                    type="file"
                    ref={imageInputRef}
                    name='file'
                    style={{ display: "none" }}
                    onChange={(e) => uploadFile(e.target.files[0])}
                    accept={props.accept}
                />
            </Stack>
        </FormControl>
    )
}