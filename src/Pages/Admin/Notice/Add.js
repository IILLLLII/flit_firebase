import React, { useCallback, useState } from 'react';
import { useRef } from 'react';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Box, Button, Checkbox, CheckboxGroup, HStack, IconButton, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { Title_2xl } from '../../../Style/Typograhy';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { addDocument, deleteDocument, updateData } from '../../../DB/function';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageUploader from '../../../Components/ImageUploader';

export function AddNotice() {
    const navigate = useNavigate();
    const location = useLocation();
    const editorRef = useRef(null);
    const [notice, setNotice] = useState(location.state ? location.state : {
        type: '공지',
        user: ['Customer'],
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


    const deleteNotice = async() => {
      if(window.confirm('삭제하시겠습니까?')){
        console.log(notice)
        await deleteDocument('Notice', notice.id)
        navigate(-1)
      }
  }

    const update = async() => {
      if(window.confirm('수정하시겠습니까?')){
        console.log(notice)
        await updateData('Notice', notice.id, {...notice, date: serverTimestamp()})
        navigate(-1)
      }
  }

    const submit = async() => {
      if(window.confirm('등록하시겠습니까?')){
        console.log(notice)
        await addDocument('Notice', {...notice, date: serverTimestamp()})
        navigate(-1)
      }
    }

  return (
    <Stack spacing={4}>
        <HStack alignItems={'flex-start'}>
        <IconButton icon={<FaArrowLeft/>} onClick={() => navigate(-1)}/>
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
      <Input borderColor={'#d9d9d9'}defaultValue={notice.title} onChange={(e) => setNotice({...notice, title: e.target.value})} borderColor={'gray.400'}/>
      </HStack>
      { notice.type === "이벤트" &&
      <HStack>
      <Text w='50px'>썸네일</Text>
      <ImageUploader w='450px' src={notice.thumbnail} setUrl={(value) => setNotice({ ...notice, thumbnail: value })}/>
      </HStack>
    }
      <Box border={'1px solid #d9d9d9'}>
      <Editor
                ref={editorRef}
                initialValue={notice.contents} // 글 수정 시 사용
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
        { location.state ? 
        <HStack>
          <Button onClick={update}>수정</Button>
          <Button onClick={deleteNotice}>삭제</Button> 
        </HStack>:
        <Button onClick={submit}>등록</Button>
        }

      </HStack>

    </Stack>
  );
}
export default AddNotice;