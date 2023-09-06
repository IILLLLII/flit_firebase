import React from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { addDocument, deleteDocument, updateData } from "../DB/function";

const ConfirmButton = ({ collection, data, type, ...props }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const submit = async () => {
    if (type == "등록") {
      let doc = await addDocument(collection, data)
      navigate(`/${collection.toLowerCase()}/view/`, { state: {...data, id: doc.id} })
    }
    else if (type == "수정") {
      await updateData(collection, data.id, data)
      navigate(`/${collection.toLowerCase()}/view/`, { state: data })
    }
    else if (type == "삭제") {
      await deleteDocument(collection, data.id)
      navigate(`/${collection.toLowerCase()}/1`)
    }
  }

  const SubmitButton = () => {
    return (
      <Button isDisabled={props.disabled} colorScheme= 'red' onClick={onOpen}>
        {type}하기
      </Button>
    )

  }


  return (
    <>
      <SubmitButton />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{collection == "Product" ? "상품" : collection == "Portfolio" ? '포트폴리오' : ""} {type}</ModalHeader>
          <ModalCloseButton />
          <ModalBody whiteSpace={'pre-wrap'}>
            {type == "삭제" ?
              `${collection == "Product" ? "상품" : collection == "Portfolio" ? '포트폴리오' : ""}을 삭제하시겠습니까?\n삭제 후 목록으로 이동합니다.\n삭제를 취소하시려면 취소 버튼을 클릭하세요.` :
              `입력한 정보로 ${collection == "Product" ? "상품" : collection == "Portfolio" ? '포트폴리오' : ""}을 등록하시겠습니까?\n${collection == "Product" ? "상품" : collection == "Portfolio" ? '포트폴리오' : ""} 등록 후 목록으로 이동합니다.\n정보를 수정하시려면 취소 버튼을 클릭하세요.`}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="red" onClick={() => submit()}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default ConfirmButton;