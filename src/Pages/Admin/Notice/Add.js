import React, { useCallback, useState } from 'react';
import { useRef } from 'react';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Box, Button, Checkbox, CheckboxGroup, HStack, IconButton, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { Title_2xl } from '../../../Style/Typograhy';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { addDocument } from '../../../DB/function';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function AddNotice() {
    const navigate = useNavigate();
    const editorRef = useRef(null);
    const [notice, setNotice] = useState({
        type: '공지',
        user: 'Customer',
        title: '',
        contents: ' ',
        date: serverTimestamp()
    })
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']];
    const removeAllBrTag = (str) => str?.replaceAll(/<br[^>]*><br>/g, '') || '';
    
    const editText = useCallback(async () => {
        const editor = editorRef.current?.getInstance()
        const contents = removeAllBrTag(editor?.getHTML());
        setNotice({...notice, contents: contents})
        // console.log(contents)
    }, []);

    const submit = async() => {
        console.log(notice)
        await addDocument('Notice', {...notice, date: serverTimestamp()})
    }

  return (
    <Stack spacing={4}>
        <HStack alignItems={'flex-start'}>
        <IconButton icon={<FaArrowLeft/>}/>
        <Text {...Title_2xl}>공지 / 이벤트 등록</Text>
        </HStack>
        <HStack spacing={4}>
        <Text w='50px'>유형</Text>
        <RadioGroup defaultValue={notice.type} onChange={(value) => setNotice({...notice, type: value})}>
            <HStack spacing={4}>
            <Radio value={'공지'}>공지</Radio>
            <Radio value={'이벤트'}>이벤트</Radio>
            </HStack>
        </RadioGroup>
      </HStack>
      <HStack spacing={4}>
        <Text w='50px'>대상</Text>
        <CheckboxGroup defaultValue={notice.user} onChange={(value) => setNotice({...notice, user: value})} >
        <HStack spacing={4}>
            <Checkbox value={'Customer'}>Customer</Checkbox>
            <Checkbox value={'Shop'}>Shop</Checkbox>
            <Checkbox value={'Florist'}>Florist</Checkbox>
            </HStack>
        </CheckboxGroup>
      </HStack>
      <HStack spacing={4}>
      <Text w='50px'>제목</Text>
      <Input defaultValue={notice.title} onChange={(e) => setNotice({...notice, title: e.target.value})} borderColor={'gray.400'}/>
      </HStack>
      <Box border={'1px solid #d9d9d9'}>
      <Editor
                ref={editorRef}
                initialValue={' '} // 글 수정 시 사용
                initialEditType='wysiwyg' // wysiwyg & markdown
                previewStyle={'vertical'} // tab, vertical
                hideModeSwitch={true}
                height='400px'
                theme={''} // '' & 'dark'
                usageStatistics={false}
                toolbarItems={toolbarItems}
                useCommandShortcut={true}
                onChange={editText}
      ></Editor>
      </Box>
      <HStack justifyContent={'flex-end'}>
        <Button onClick={submit}>등록</Button>

      </HStack>

    </Stack>
  );
}
export default AddNotice;