import { useState } from 'react';
import { Box, Flex, Text, Image, Button, Center, IconButton, CloseButton, Skeleton } from '@chakra-ui/react';
import Dropzone from 'react-dropzone';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
  serverTimestamp
} from "firebase/firestore";
import { db, storage } from '../DB/firebase-config'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { v4 } from 'uuid'
import { AddIcon } from '@chakra-ui/icons';
import { fliker } from '../Style/Animate';

const ImageUploader = ({ ...props }) => {
  const uploadFile = (file) => {
		if(file == null) return "";
		var url = file.name + v4();

		const imageRef = ref(storage, `${url}`)

		uploadBytes(imageRef, file).then((snapshot) => {
			// 업로드 되자마자 뜨게 만들기
			getDownloadURL(snapshot.ref).then((imageUrl) => {
            props.setUrl(imageUrl);
			});
		})
	}

  const handleDrop = (acceptedFiles) => {
    // 파일을 선택하거나 드롭할 때 호출됩니다.
    uploadFile(acceptedFiles[0])
  };

  const handleRemove = () => {
    // 파일 삭제 버튼을 클릭할 때 호출됩니다.
    props.setUrl(null);
  };

  return (
    <Box>
      {!props.src ? (
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <Box
              {...getRootProps()}
              border="2px dashed gray"
              borderRadius="lg"
              padding="10"
              textAlign="center"
              bgColor={'white'}
              w={props.w} h={props.h} 
            >
              <Center w='100%' h='100%'>
                <input {...getInputProps()}/>
                <AddIcon boxSize={24} color={'gray.400'}/>
              </Center>
            </Box>
          )}
        </Dropzone>
      ) : (
        <Flex alignItems="center">
          <Box
            borderRadius="lg"
            textAlign="center"
            w={props.w} h={props.h}
            backgroundColor='gray.200'
            border="1px solid #d9d9d9"
          >
            <Flex position="relative" alignItems="flex-start" justifyContent={'flex-end'} >
              <Image borderRadius='lg' objectFit='cover' w={props.w} h={props.h} src={props.src} alt="uploaded image" />
                <CloseButton onClick={() => handleRemove()} position="absolute" marginTop={-2} marginRight={-2} bgColor={'blue.400'} borderRadius={'full'} color={'white'}/>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default ImageUploader;
