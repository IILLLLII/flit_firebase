import { Button, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import MobileStatus from '../../../Components/MobileStatus'
import { useNavigate } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser';

function Setting() {
    const navigate = useNavigate();
    const [modalId, setModalId] = useState(-1)
  return (
    <Flex bgColor={'white'} flexDirection={'column'} w="100%">
    <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
        <MobileStatus title={'설정'} />
    </Flex>
    <Stack pt={'70px'} bgColor={'gray.100'} gap={8}>
        <Stack spacing={0} divider={<StackDivider/>} borderTop={'1px solid #d9d9d9'} borderBottom={'1px solid #d9d9d9'}>
        <Text onClick={() => navigate('/customer/info')} p={4} bgColor={'white'}>계정 관리</Text>
        <Text onClick={() => navigate('/customer/notice')} p={4} bgColor={'white'}>공지사항</Text>
        <Text onClick={() => setModalId(1)} p={4} bgColor={'white'}>서비스 이용 약관</Text>
        <Text onClick={() => setModalId(2)} p={4} bgColor={'white'}>개인정보처리방침</Text>
        <HStack bgColor={'white'} justifyContent={'space-between'}>
        <Text p={4} bgColor={'white'}>버전정보</Text>
        <Text fontWeight={500} color={'red.500'} p={4} bgColor={'white'}>{'0.0.0.0'}</Text>
        </HStack>
        </Stack>

        <Stack spacing={0} divider={<StackDivider/>} borderTop={'1px solid #d9d9d9'} borderBottom={'1px solid #d9d9d9'}>
        <Text p={4} bgColor={'white'}>로그아웃</Text>
        <Text p={4} bgColor={'white'}>탈퇴하기</Text>
            </Stack>
    </Stack>

    <Modal isOpen={modalId === 1} onClose={() => setModalId(-1)} size={{base: 'full', md: '3xl'}}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                    <p>{HTMLReactParser(service)}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setModalId(-1)}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={modalId === 2} onClose={() => setModalId(-1)} size={{base: 'full', md: '3xl'}}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                    <p>{HTMLReactParser(privacy)}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setModalId(-1)}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </Flex>
  )
}

export const privacy=`
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:바탕;
	panose-1:2 3 6 0 0 1 1 1 1 1;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:"맑은 고딕";
	panose-1:2 11 5 3 2 0 0 2 0 4;}
@font-face
	{font-family:"Apple SD Gothic Neo";
	panose-1:2 0 3 0 0 0 0 0 0 0;}
@font-face
	{font-family:"\@맑은 고딕";}
@font-face
	{font-family:"\@바탕";
	panose-1:2 3 6 0 0 1 1 1 1 1;}
@font-face
	{font-family:"\@Apple SD Gothic Neo";}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0cm;
	text-align:justify;
	text-justify:inter-ideograph;
	text-autospace:none;
	word-break:break-hangul;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;}
a:link, span.MsoHyperlink
	{color:blue;
	text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
	{color:#954F72;
	text-decoration:underline;}
p
	{margin-right:0cm;
	margin-left:0cm;
	font-size:12.0pt;
	font-family:"Times New Roman",serif;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{text-align:justify;
	text-justify:inter-ideograph;}
 /* Page Definitions */
 @page WordSection1
	{size:595.3pt 841.9pt;
	margin:72.0pt 72.0pt 72.0pt 72.0pt;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=ko-Kore-KR link=blue vlink="#954F72" style='word-wrap:break-word'>

<div class=WordSection1>

<p style='margin:0cm;background:white'><b><span lang=KO style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>일리 화훼 이커머스 플랫폼 </span></b><b><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:#404040'>FLIT
‘(</span></b><b><span lang=KO style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:#404040'>플릿</span></b><b><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>)’ </span></b><b><span lang=KO
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:#404040'>개인정보처리방침</span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span lang=KO style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>일리</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이하</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
‘</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>’
)</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보통신망</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용촉진</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보보호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법률</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통신비밀보호법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전기통신사업법</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보통신서비스제공자가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>준수하여야</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법령상의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호규정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>준수하며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법령에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의거한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>권익</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보호에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최선을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>적용되며</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다음과</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내용을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"Apple SD Gothic Neo";color:#404040'>회사는</span><span style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>개인정보처리방침을</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>통하여</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>고객님께서</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>제공하시는</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>개인정보</span><span
lang=KO style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>는</span><span
lang=KO style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>
</span><span lang=KO style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'>다음과 같은</span><span lang=KO style='font-size:8.0pt;font-family:
"Apple SD Gothic Neo";color:#404040'> </span><span style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'>용도와</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>방식으로</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>이용되고</span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'> </span><span
style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>있으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";color:#404040'>,
</span><span style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'>개인정보보호를</span><span style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'> </span><span style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'>위해</span><span style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'> </span><span lang=KO style='font-size:8.0pt;font-family:"Apple SD Gothic Neo";
color:#404040'>아래와 같은 조치를 취합니다</span><span lang=EN-US style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>1</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집하는</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>항목</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집방법</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>1</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>항목</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
text-indent:-20.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>원활한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객상담</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>각종</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최소한의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필수항목으로</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>1. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원가입</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> ­
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>항목</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>:
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이메일</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>주소</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이름</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>생년월일</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>휴대폰</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거주</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>국가</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>주소</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>2. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원가입</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> -­ </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>항목</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>:
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이메일</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>주소</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자명</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거주</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>국가</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>휴대폰</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업장</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>주소</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
(</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>한국거주자의</span></p>

<p style='margin:0cm;text-indent:28.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대표자명</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등록번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자등록증</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사본</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>3. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자동</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>결제</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수단</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등록</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> - </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신용카드</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>:
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>생년월일</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자등록번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>),
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신용카드번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>카드</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>유효기간</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> - </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>계좌이체</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>한국사업자회원의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>):
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>은행명</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>생년월일</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사업자등록번호</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>),
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>계좌번호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용과정이나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>업무</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>과정에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보들이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자동으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>생성되거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>추가로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집될</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> - IP
Address, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>쿠키</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>접속</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>로그</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>방문</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>일시</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>서비스</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이용</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>기록</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>불량</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이용</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>기록</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>, </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>결제</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>기록</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>③</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>과정에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>특정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용고객에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>한해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보들이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>추가로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집될</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>1. </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>별도</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동의를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>구한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 2 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집방법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다음과</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>1. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>홈페이지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서면</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>양식</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>팩스</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전화</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>상담</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>게시판</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이메일</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>오프라인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이벤트</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>응모</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>세미나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>참석</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>2. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>협력</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사로부터의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>3. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>생성</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>툴을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>2</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용목적</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>3</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>계약</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이행</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따른</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요금정산</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
text-indent:-20.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>콘텐츠</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>특정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>맞춤</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>물품배송</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>청구서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>발송</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인인증</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>구매</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요금</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>결제</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요금</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>추심</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"Apple SD Gothic Neo";color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>4</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원관리</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
text-indent:-20.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원제</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제한적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인제에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따른</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인확인</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인식별</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>불량회원의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>부정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방지와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비인가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용방지</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입의사</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입횟수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제한</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>추후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대리인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인확인</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>분쟁</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기록보존</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>불만처리</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>민원처리</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고지사항</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전달</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원관리와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>5</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신규</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개발</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>마케팅</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>광고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>활용</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
text-indent:-20.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신규</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개발</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>맞춤</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통계학적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>특성에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따른</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>광고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>게재</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>유효성</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,  
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이벤트</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>광고성</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>참여기회</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>접속빈도</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파악</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스이용에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통계</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신규</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개발과</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>마케팅</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>활용에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>3</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위탁</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>6</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객들의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
&quot;</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>제</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>2</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>장</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>개인정보의</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>수집목적</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>및</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이용목적</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>&quot;</span><span lang=KO style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고지한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>범위</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용하며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사전</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없이는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>범위를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>초과하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용하거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>원칙적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>외부에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>공개하지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다만</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우에는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>예외로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>1. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객들이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사전에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동의한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>2. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법령의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>규정에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의거하거나</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수사</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법령에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정해진</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>절차와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따라</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수사기관의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요구가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin:0cm;text-indent:20.0pt;background:white'><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>3. </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사전</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>발생하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>4</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보유</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용기간</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b></p>

<p style='margin:0cm;background:white'><b><span lang=EN-US style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif'>&nbsp;</span></b></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>고객의</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>원칙적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용목적이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>달성되면</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>지체</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 8 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내부</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방침에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보유</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사유</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 9 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련법령에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보유</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사유</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>상법</span><span lang=EN-US style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>, </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전자상거래</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등에서의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>소비자보호에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법률</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관계법령의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>규정에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보존할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필요가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관계법령에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>일정한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기간</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동안</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보관합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보관하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>그</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보관의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로만</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용하며</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보존기간은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>예시와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<div align=center>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;padding:
  0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>보관 정보</span></p>
  </td>
  <td width=170 style='width:127.55pt;border:solid windowtext 1.0pt;border-left:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>보존 이유</span></p>
  </td>
  <td width=100 style='width:74.8pt;border:solid windowtext 1.0pt;border-left:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>보존 기간</span></p>
  </td>
 </tr>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>계약</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>또는</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>청약철회</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>등에</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>관한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=170 rowspan=4 style='width:127.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>전자상거래</span><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>등에서의</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span></p>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>소비자보호에</span><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>관한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>법률</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>5</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>년</span></p>
  </td>
 </tr>
 <tr style='height:18.4pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:18.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>대금결제</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>및</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>재화</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>등의</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>공급에</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>대한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:18.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>5</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>년</span></p>
  </td>
 </tr>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>소비자의</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>불만</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>또는</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>분쟁</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>처리에</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>관한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>3</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>년</span></p>
  </td>
 </tr>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>표시</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> <span lang=EN-US>| </span></span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>광고에</span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'> </span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>관한</span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'> </span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>6</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>개월</span></p>
  </td>
 </tr>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>세법이</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>규정하는</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>모든</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>거래에</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>관한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>장부</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>및</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>증빙서류</span></p>
  </td>
  <td width=170 style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>국세기본법</span><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>, </span><span
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>법인세법</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>5</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>년</span></p>
  </td>
 </tr>
 <tr style='height:18.4pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:18.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>전자금융</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>거래에</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>관한</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=170 style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:18.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>전자금융거래법</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:18.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>5</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>년</span></p>
  </td>
 </tr>
 <tr style='height:17.6pt'>
  <td width=330 style='width:247.85pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>로그인</span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'> </span><span style='font-size:8.0pt;
  font-family:"맑은 고딕",sans-serif'>기록</span></p>
  </td>
  <td width=170 style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span style='font-size:
  8.0pt;font-family:"맑은 고딕",sans-serif'>통신비밀보호법</span></p>
  </td>
  <td width=100 style='width:74.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.6pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>3</span><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>개월</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>5</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기절차</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법</span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>고객의</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>원칙적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용목적이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>달성되면</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>지체</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기절차</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다음과</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>10</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기절차</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
text-indent:-20.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원가입</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>입력한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>달성된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>별도의</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
DB </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>로</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>옮겨져</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>(</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>종이의</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>별도의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서류함</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내부</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방침</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기타</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법령에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보보호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사유에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따라</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보유</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용기간</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>참조</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>일정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기간</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기됩니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법률에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제외하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보유되는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이외의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다른</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용되지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>11</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기방법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>종이에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>출력된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>분쇄기로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>분쇄하거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>소각을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파기합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전자적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파일</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>형태로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기록을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>재생할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기술적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>삭제합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>6</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법정대리인의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>권리</span></b></p>

<p style='margin:0cm;background:white'><b><span lang=EN-US style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif'>&nbsp;</span></b></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>12</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>권리</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>행사방법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법정대리인은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>언제든지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등록되어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자신의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조회</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입해지를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요청할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조회</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해서는</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
&quot;</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>회원</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>정보</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>변경</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>(My Page &gt; </span><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회원정보</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관리</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> &gt; </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>변경</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)&quot;,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가입해지</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>동의철회</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해서는</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
&quot;</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>회원탈퇴</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>(My Page &gt; </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원탈퇴</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)&quot; </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>페이지에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>절차를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거치신</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>직접</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>열람</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>탈퇴가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가능합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>③</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>혹은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호책임자에게</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서면</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전화</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이메일로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>연락하시면</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>지체</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조치하겠습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>④</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>오류에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요청하신</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우에는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>완료하기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전까지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>당해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공하지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>잘못된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
3 </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>자에게</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이미</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>제공한</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>경우에는</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>정정</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>처리결과를</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>제</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> 3</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>자에게</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>지체</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>없이</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>통지하여</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>정정이</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이루어지도록</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>하겠습니다</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>. </span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>⑤</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>혹은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>법정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대리인의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>요청에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>해지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>삭제된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보는</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
&quot;</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>제</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> 4 </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>장</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>개인정보의</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>보유</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>및</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>이용기간</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>&quot;</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>에</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>명시된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>바에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따라</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>그</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>외의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>용도로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>열람</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>없도록</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>7</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자동</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장치의</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>설치</span></b><b><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>/</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>운영</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거부에</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관한</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사항</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 13 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정의</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인화되고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>맞춤화</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공하기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수시로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>불러오는</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
‘</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(cookie)’</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹사이트를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>운영하는데</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용되는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서버가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>브라우저에게</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보내는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아주</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>작은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>텍스트</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파일로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>컴퓨터의</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>  
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>하드디스크에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장됩니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이후</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사이트에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방문할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사이트</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서버는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>하드</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>디스크에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장되어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내용을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>읽어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>환경설정을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>유지하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>맞춤화</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공하기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용됩니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>③</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>식별하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자동적</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>/</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>능동적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집하지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>언제든지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이러한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거부하거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>삭제할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 14 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>목적</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>고객들이</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방문한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>각</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스와</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사이트들에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방문</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용형태</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>인기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>검색어</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>규모</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>파악하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>고객에게</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>광고를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>포함한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최적화된</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>맞춤형</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제공을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사용합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> 15 </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>설치</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>/</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>운영</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거부</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>①</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>설치에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>선택권을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가지고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>따라서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹브라우저에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>옵션을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>설정함으로써</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>모든</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>허용하거나</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장될</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>때마다</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거치거나</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아니면</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>모든</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거부할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수도</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>②</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다만</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>거부할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우에는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>로그인이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필요한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>일부</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>어려움이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:16.0pt;
text-indent:-16.0pt;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>③</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>쿠키</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>설치</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>허용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>여부를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>지정하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방법</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>(Internet
Explorer </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>의</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>경우</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>)</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>은</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>다음과</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>같습니다</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
background:white'><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>1. [</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>도구</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>] </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>메뉴에서</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'> [</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>인터넷</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>옵션</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>]</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>선택합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
background:white'><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>2. [</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>개인정보</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>탭</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>]</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>을</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>클릭합니다</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>. </span></p>

<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:20.0pt;
background:white'><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>3. [</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>개인정보취급</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>수준</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>]</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>을</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>설정하시면</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>됩니다</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>8</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기술적</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>/</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관리적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대책</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회사는</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객들의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리함에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>분실</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>도난</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>누출</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>변조</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>또는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>훼손되지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않도록</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>안전성</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다음과</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>같은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기술적</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>/</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관리적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대책을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>강구하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>16</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>암호화</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회원</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>암호화되어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>저장</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관리되고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인만이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>알고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>변경도</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>알고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의해서만</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가능합니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>17</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>해킹</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대비한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대책</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회사는</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>해킹이나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>컴퓨터</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>바이러스</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회원의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>유출되거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>훼손되는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>것을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>막기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최선을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>훼손에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대비해서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자료를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수시로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>백업하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있고</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최신</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>백신프로그램을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객들의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>자료가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>누출되거나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>손상되지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않도록</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>방지하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>암호화</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통신</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>네트워크상에서</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>안전하게</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>전송할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있도록</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>그리고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>침입차단시스템을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>외부로부터의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>무단</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>접근을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통제하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기타</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>시스템적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>보안성을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확보하기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>가능한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>모든</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기술적</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장치를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>갖추려</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>노력하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>18</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>직원의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최소화</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>교육</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회사의</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보관련</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>처리</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>직원은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담당자에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>한정시키고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>위한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>별도의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>비밀번호를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>부여하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>정기적으로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>갱신하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있으며</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담당자에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수시</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>교육을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>준수를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>항상</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>강조하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>19</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호전담기구의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>운영</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>사내</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호전담기구</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이행사항</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담당자의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>준수여부를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>확인하여</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>문제가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>발견될</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>즉시</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수정하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>바로잡을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있도록</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>노력하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>단</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의무를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>하였음에도</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>불구하고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본인의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>부주의나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사가</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관리하지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>영역에서의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사고</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>등</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>귀책에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기인하지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>손해에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대해서는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>책임을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>지지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><b><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>제</span></b><b><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> 9 </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>장</span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span></b><b><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기타</span></b></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>20</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호책임자</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담당자의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>연락처</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>귀하께서는</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이용하시며</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>발생하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>모든</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>관련</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>민원을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보보호책임자</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>혹은</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>담당부서로</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신고하실</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있습니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>회사는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고객들의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신고사항에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신속하게</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>충분한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>답변을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>드릴</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>것입니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=301 colspan=2 valign=top style='width:225.4pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>개인정보 보호책임자</span></p>
  </td>
  <td width=301 colspan=2 valign=top style='width:225.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>개인정보 보호담당자</span></p>
  </td>
 </tr>
 <tr>
  <td width=47 valign=top style='width:35.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>이름</span></p>
  </td>
  <td width=254 valign=top style='width:190.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>전엄지</span></p>
  </td>
  <td width=49 valign=top style='width:36.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>이름</span></p>
  </td>
  <td width=252 valign=top style='width:188.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>김현진</span></p>
  </td>
 </tr>
 <tr>
  <td width=47 valign=top style='width:35.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>소속</span></p>
  </td>
  <td width=254 valign=top style='width:190.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>경영기획</span></p>
  </td>
  <td width=49 valign=top style='width:36.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>소속</span></p>
  </td>
  <td width=252 valign=top style='width:188.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>개발기획</span></p>
  </td>
 </tr>
 <tr>
  <td width=47 valign=top style='width:35.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>전화</span></p>
  </td>
  <td width=254 valign=top style='width:190.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>070-7777-9272</span></p>
  </td>
  <td width=49 valign=top style='width:36.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>전화</span></p>
  </td>
  <td width=252 valign=top style='width:188.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>070-7777-9272</span></p>
  </td>
 </tr>
 <tr>
  <td width=47 valign=top style='width:35.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>메일</span></p>
  </td>
  <td width=254 valign=top style='width:190.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>flit@illi.kr</span></p>
  </td>
  <td width=49 valign=top style='width:36.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=KO
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>메일</span></p>
  </td>
  <td width=252 valign=top style='width:188.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p align=center style='margin:0cm;text-align:center'><span lang=EN-US
  style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif'>developer@illi.kr</span></p>
  </td>
 </tr>
</table>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>기타</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보침해에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대한</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>신고나</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>상담이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>필요하신</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>경우에는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>아래</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>기관에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>문의하시기</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>바랍니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>개인정보침해신고센터</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
(https://privacy.kisa.or.kr | </span><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>국번없이</span><span lang=EN-US style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> 118) </span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>대검찰청</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사이버수사과</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
(http://www.spo.go.kr | </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>국번없이</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'> 1301) </span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>경찰청</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사이버안전국</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
(http://cyberbureau.police.go.kr | </span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>국번없이</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> 182)</span></p>

<p style='margin:0cm;background:white'><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:#404040'>&nbsp;</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>21</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>예외</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>사항</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>회사의</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>인터넷</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>서비스에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>링크되어</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>웹사이트들이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보를</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집하는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>행위에</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>대해서는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>본</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
‘</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>’</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>적용되지</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>않음을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>알려</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>드립니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>제</span><span lang=EN-US style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>22</span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>조</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> (</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고지의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>의무</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>)
</span></p>

<p style='margin:0cm;background:white'><span style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>현</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'> </span><span style='font-size:
8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보처리방침</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>내용</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>추가</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>삭제</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수정이</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>있을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>시에는</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개정</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>최소</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
7 </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>일전부터</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>홈페이지의</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'> ‘</span><span style='font-size:8.0pt;
font-family:"맑은 고딕",sans-serif;color:black'>공지사항</span><span lang=EN-US
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>’</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>을</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>통해</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>고지할</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>것입니다</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>.
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>다만</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>개인정보의</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>수집</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>및</span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'> </span><span
style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>활용</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>,
</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>제</span><span
lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;color:black'>
3 </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>자</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>제공</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>등과</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>같이</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>고객</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>권리의</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>중요한변경이</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>있을</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>경우에는</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>최소</span><span lang=EN-US style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> 30</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>일</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>전에</span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'> </span><span style='font-size:8.0pt;font-family:"맑은 고딕",sans-serif;
color:black'>고지합니다</span><span lang=EN-US style='font-size:8.0pt;font-family:
"맑은 고딕",sans-serif;color:black'>.</span></p>

</div>

</body>

</html>
`

export const service=`
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:"Arial Unicode MS";
	panose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
	{font-family:"맑은 고딕";
	panose-1:2 11 5 3 2 0 0 2 0 4;}
@font-face
	{font-family:"\@Arial Unicode MS";
	panose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
	{font-family:"\@맑은 고딕";}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0cm;
	line-height:115%;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;}
h1
	{margin-top:20.0pt;
	margin-right:0cm;
	margin-bottom:6.0pt;
	margin-left:0cm;
	line-height:115%;
	page-break-after:avoid;
	font-size:20.0pt;
	font-family:"Arial",sans-serif;
	font-weight:normal;}
.MsoChpDefault
	{font-size:11.0pt;
	font-family:"맑은 고딕",sans-serif;}
.MsoPapDefault
	{line-height:115%;}
 /* Page Definitions */
 @page WordSection1
	{size:595.45pt 841.7pt;
	margin:72.0pt 72.0pt 72.0pt 72.0pt;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 ol
	{margin-bottom:0cm;}
ul
	{margin-bottom:0cm;}
-->
</style>

</head>

<body lang=ko-Kore-KR style='word-wrap:break-word'>

<div class=WordSection1>

<h1 style='margin-top:24.0pt;page-break-after:auto'><a name="_o70qzfsrqy9w"></a><b><span
style='font-size:23.0pt;line-height:115%;font-family:"Arial Unicode MS",sans-serif'>서비스
이용약관</span></b></h1>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제1조
(목적)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>본
약관은 일리(이하 “회사”라 합니다.)가 운영하여 제공하는 플릿 서비스 이용과 관련하여 회사와 판매자의 권리, 의무 및 책임사항, 기타 필요한
사항을 규정함을 목적으로 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제2조
(용어의 정의)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>이
약관에서 달리 정함이 없으면 용어의 정의는 다음 각 호와 같습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
“앱”이란 “판매자”가 재화 또는 용역(이하 “상품”이라 합니다.)을 “고객”에게 판매하기 위하여, 회사가 컴퓨터 등 정보통신설비를 이용하여 상품을
거래할 수 있도록 설정하여 “서비스”를 제공하는 가상의 영업장을 말합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
“서비스”란 회사가 운영하는 앱을 통해 고객이 판매자의 상품 등을 주문 • 결제하면, 주문이 완료된 상품 등을 판매자가 고객에게 전달하는 주문
중개 • 결제 서비스 및 회사가 앱을 통하여 판매자에게 제공하는 쿠폰발생대행 등의 서비스 일체를 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
“판매자”란 본 약관에 따라 회사와 이용계약을 체결하고, 회사가 제공하는 서비스를 통하여 고객에게 상품을 판매하는 자를 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
“고객”이란 회사가 제공하는 서비스를 이용하여 판매자로부터 상품을 구매하는 소비자를 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑤
“판매자 전용 앱”이란 회사가 서비스 제공을 위해 필요한 정보를 판매자와 상호 교환하는 등 서비스 제공을 위하여 판매자에게 제공하는 툴을 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑥
“수수료”란 판매자가 서비스 이용을 위해 회사에 지불하는 금액을 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑦
“게시물”이란 회사가 제공하는 서비스에 등록한 문자, 음성, 음향, 화상, 동영상, 정보 형태의 글, 사진 및 각종 파일과 링크 등(형태, 형식
불문)을 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑧
“할인쿠폰”이란 고객이 서비스 이용시 일정 금액 또는 비율 상당의 금액을 할인 받을 수 있는 혜택으로서, 회사 또는 판매자가 앱을 통하여 발행하는
쿠폰을 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제3조
(계약의 성립)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자가 서비스를 이용하고자 할 때에는 서면 또는 판매자 전용 앱을 이용하여 이용신청서를 회사에 제출하여야 하며, 회사가 이를 승인한 때에 서비스
이용 계약이 성립된 것으로 봅니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 이용신청에 대한 심사 및 서비스 제공을 위하여 사업자등록증, 영업신고증 등 필수서류와 판매자 신원정보, 매장정보 및 상품정보 등의 제공을
판매자에게 요청할 수 있으며, 만약 판매자가 필수서류를 제출하지 않거나 제공한 서류 및 정보가 부정확하거나 허위인 경우 회사는 이용 신청을 거절하거나
그 승인을 보류할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
판매자가 될 수 있는 자는 법인 또는 개인 사업자 중 화훼 소매업 사업자이며, 영업신고증상 영업의 형태가 유흥주점, 단란주점인 경우 또는 혐오식품
취급 업소와 미풍양속 저해 업소 등은 이용 신청이 거절될 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제4조
(판매자 등록정보 변경)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자는 서비스 이용을 위하여 상호, 대표자, 소재지, 연락처, 업종 등 회사가 요청하는 정보(이하 “등록정보”라 합니다.)를 회사에게 제공하여야
하고, 등록정보가 변경되는 경우, 즉시 등록정보를 회사가 정한 방식으로 변경하거나 해당 변경 사실을 회사에 통지하고 등록정보 변경을 신청하여야
합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 판매자의 등록정보 변경 신청이 관련 법령이나 회사 정책에 위배되는 경우 해당 정보의 변경을 제한할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사는 판매자가 등록정보를 변경하지 않아 발생한 불이익에 대하여 회사의 고의 또는 중과실이 없는 한 책임지지 않습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제5조
(서비스 수수료)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사는 서비스 및 결제수단별로 각각의 수수료(이하 “서비스 수수료”라 합니다.)를 정하여 적용할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 서비스 수수료의 종류, 요율, 적용 및 지급방법, 세금계산서 발행 등에 관한 사항을 명시하여, 이를 판매자 전용 앱 등을 통하여 공시합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사는 필요시 서비스 수수료를 신설 또는 변경할 수 있으며, 신설 및 변경 사항은 판매자 전용 앱 등을 통하여 사전에 별도 공시합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
고객이 할인쿠폰 등을 사용하는 경우, 서비스 수수료는 할인쿠폰 등의 발행 주체별 부담분에 따라 거래가격을 조정하여 적용하기로 하며, 상세 내용은
별도 공시합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제6조
(대금 정산 및 정산 보류)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사는 판매자에 대한 판매대금 정산과 관련하여, 서비스 및 결제수단별로 결제일, 결제방법 등을 명시하고 이용정책에 반영하여 판매자 전용 앱을 통해
공시하기로 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 계산된 결제금액에서 서비스 수수료 및 기타 판매자가 회사에 지불해야 하는 상계 가능 금액을 차감하여 판매자에게 지급하고, 관련 세부 내역을
판매자 전용 앱을 통해 제공하기로 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사는 다음 각 호의 어느 하나에 해당하는 경우, 판매자에 대한 대금 정산을 보류할 수 있습니다. 이와 관련하여, 회사는 관련 상품에 대한 판매
중지 등의 조치를 취할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>고객이 상품을 신용카드로 구매한 경우, 회사는 여신전문금융업법의
관련 조항에 따라 신용카드 부당 사용 여부를 확인하기 위해 최대 10영업일 동안 관련 결제금액의 지급을 보류할 수 있습니다. 이 경우 회사는 거래의
유효성 확인을 위한 자료를 판매자에게 요구할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>자격을 갖춘 제3자가 가압류, 압류, 추심 등 법원 명령에
따른 정당한 권리를 기반으로 판매자에 대한 결제금액의 지급 보류를 요청하는 경우, 회사는 지급 보류에 대한 요청이 철회될 때까지 제3자에게 지급할
금액에 상당하는 결제금액의 지급을 보류할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>제3자에 대한 권리침해 등으로 인한 이의제기 또는 분쟁으로
환불, 교환, 행정처분 등의 사유가 발생한 경우 회사는 해당 이슈가 해소될 때까지 관련 결제금액의 지급을 보류할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:12.0pt;
margin-left:36.0pt;text-indent:-18.0pt'>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='font-family:"Arial Unicode MS",sans-serif'>법률이나 이 약관의 규정을 위반하거나
위반하였다고 합리적으로 의심할 만한 합리적인 사유가 발생하는 경우 결제금액의 전부 또는 일부의 지급을 보류할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
회사는 제3항에 따라 대금 정산 보류, 상품 판매 중지 등의 조치를 취하고자 할 경우 그 취지 및 사유를 판매자에게 통지하여야 하며, 판매자는
해당 사유에 대한 소명자료를 회사에 제출하여야 합니다. 만약 판매자가 제출한 소명자료가 불충분한 경우 회사는 해당 원인이 해소될 때까지 결제금액의
지급을 보류할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제7조
(가게 및 상품 정보 등록/변경)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자는 고객에게 정확하고 구체적인 정보를 제공하기 위하여 아래 각 호 기재 가게정보 및 상품정보 게재를 회사에 신청하여야 하고, 회사는 판매자가
신청한 가게정보 및 상품정보를 검수 기준에 따라 심사하며 서비스 내 게재 여부를 최종 결정하여 판매자에게 통지하기로 합니다. 회사는 판매자가 등록한
정보가 부정확하거나 불충분하다고 판단하는 경우 판매자에게 정보의 보완 또는 추가 입력을 요청할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>아래 각 목에 해당하는 판매자에 대한 가게정보(이하
“가게정보”)</span></p>

<p class=MsoNormal style='margin-left:72.0pt;text-indent:-18.0pt'>○<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>가. 가게명</span></p>

<p class=MsoNormal style='margin-left:72.0pt;text-indent:-18.0pt'>○<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>나. 주소</span></p>

<p class=MsoNormal style='margin-left:72.0pt;text-indent:-18.0pt'>○<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>다. 전화번호</span></p>

<p class=MsoNormal style='margin-left:72.0pt;text-indent:-18.0pt'>○<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>라. 운영시간</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:12.0pt;
margin-left:72.0pt;text-indent:-18.0pt'>○<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='font-family:"Arial Unicode MS",sans-serif'>마. 기타 회사가 정하는 판매자에
대한 정보</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자는 판매자 전용 앱 또는 고객센터를 통하여 가게 및 상품 정보의 변경을 신청할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
판매자는 가게정보 및 상품정보와 관련하여 전자상거래 등에서의 소비자보호에 관한 법률, 상표법, 저작권법 등 관련 법령을 준수할 의무가 있으며,
이를 위반하는 경우 그에 대한 책임을 부담합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
판매자가 실제 가게정보 및 상품정보와 다른 내용을 제공한 것으로 확인되는 경우, 회사는 판매자에게 해당 정보의 삭제 또는 수정을 요청할 수 있습니다.
만약 판매자가 삭제 또는 수정 요청을 이행하지 않을 경우 회사는 판매자의 정보 노출 중단, 서비스 이용정지 등의 조치를 취할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑤
판매자가 등록한 가게 및 상품 정보는 서비스 및 회사의 서비스와 관련된 프로모션 등에 노출될 수 있고, 필요한 범위 내에서 일부 수정/편집되어
노출될 수 있습니다. 이 경우 판매자는 고객센터 등을 통해 해당 게시물의 삭제, 비공개 등의 조치를 취할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑥
회사는 판매자가 등록한 가게정보 및 상품정보와 관련하여 아래 각 호의 어느 하나에 해당하는 경우, 해당 가게정보 및 상품정보 게재를 제한할 수
있습니다. 다만, 아래의 사유로 판매자의 가게정보 및 상품정보의 노출을 제한하는 경우, 회사는 해당 제한 조치 전에 사유와 조치 내용을 판매자에게
통지합니다. 다만, 법령 위반 등 급박한 사정이 있는 경우 조치를 취한 후 사후 통지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>등록된 가게정보 및 상품정보와 관련한 판매자의 매장이
폐업한 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>가게정보 및 상품정보가 허위로 확인된 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>회사 및 서비스의 명예 • 평판 • 신용이나 신뢰도를
훼손하거나 훼손할 우려가 있는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>서비스의 품질을 저하시키거나 저하시킬 우려가 있는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>고객에게 추가 수수료를 요구하거나 정당한 사유 없이 고객의
주문을 거부하는 경우</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:12.0pt;
margin-left:36.0pt;text-indent:-18.0pt'>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='font-family:"Arial Unicode MS",sans-serif'>기타 위 사유에 준하여 가게정보
및 상품정보의 게재를 제한하여야 하는 객관적이고 합리적인 사유가 발생하는 경우</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제8조
(서비스 이용 제한 등)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사는 판매자가 1년 이상 로그인하지 않거나 1년 이상 거래가 없는 경우 판매자 정보 보호 및 운영의 효율성을 위해 일시적으로 이용을 제한할 수
있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 다음 각 호에 대하여 판매자의 서비스 이용을 정지하거나, 계약 해지 등의 조치를 취할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>판매자가 서비스를 이용하는 고객에게 회사가 제공하는 결제
수단을 통하지 아니하고 직접 상품을 판매하거나 판매하려고 시도한 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>회사의 직원(가맹/운영센터, 고객센터 직원을 포함한 회사와
관련된 업무를 수행하는 모든 직원)에게 욕설, 모욕, 폭언, 성희롱, 성추행, 위협, 폭력 등의 행위를 한 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>판매자가 회사로부터 전달받은 고객의 정보를 본 약관 상의
의무 이행을 위한 목적 이외의 용도로 사용한 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>판매자가 위법 부당한 방법으로 고객이 작성한 리뷰의 변경을
요청하기 위하여 고객에게 별도로 연락하거나, 고객의 주소지를 직접 방문하는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>판매자의 상품이나 서비스 품질에 대한 고객민원 빈발 또는
고객의 평가가 현저히 낮다고 회사가 판단하는 경우에 약관 제3조 제3항에 의한 승인 거절 사유가 발생한 경우</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:12.0pt;
margin-left:36.0pt;text-indent:-18.0pt'>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='font-family:"Arial Unicode MS",sans-serif'>법령 위반 등 판매자의 서비스
이용을 제한할 객관적 필요성이 인정되는 경우</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사는 본 조에 따라 판매자의 서비스 이용을 제한하거나 계약을 해지하는 경우 그 내용을 판매자에게 사전 통지하기로 합니다. 다만, 계약 해지의
경우를 제외하고 회사가 긴급하게 이용 제한 등이 필요한 경우 사후 통지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제9조(서비스의
중단)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>회사는
컴퓨터 등 정보통신 설비의 보수, 업그레이드, 점검, 교체, 해킹 등으로 정상적인 서비스 제공이 어려운 경우에는 서비스의 제공을 일시 중단할 수
있습니다. 이 경우 회사는 사전에 일시 중단될 서비스의 내용 및 사유와 기간 등을 판매자 전용 앱 등을 통하여 공지합니다. 다만, 천재지변 또는
이에 준하는 불가항력 등으로 인하여 서비스 중단을 사전에 통지할 수 없는 경우에는 사후에 통지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사는 제1항의 조치에 관한 원인이 되는 사유가 종료되는 경우 지체 없이 조치를 해제하고 원상 회복하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"맑은 고딕",sans-serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제10조
(리뷰관리 및 게시 중단 요청 등)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
“리뷰”란 서비스를 이용한 고객이 자신의 경험을 텍스트, 사진, 동영상 등으로 작성하여 등록하는 게시물을 의미합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
고객 또는 판매자가 명시적인 의사를 표시하지 않는 한 리뷰를 공개합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
리뷰가 다음 각호의 사유에 해당하는 경우, 부적합한 리뷰로 판단하여 사전 통지 후 삭제 또는 임시조치(블라인드) 처리할 수 있습니다. 다만, 위법행위임이
명백하거나 이를 방치하면 회복할 수 없는 중대한 피해가 발생할 우려가 있는 경우 또는 이미 위 절차에 따라 삭제된 게시물과 유사한 내용을 반복적으로
게시하는 경우 통지 절차를 생략하고 해당 게시물을 일시적으로 제한 할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>정확하지 않은 정보를 제공하거나 운영자 등을 사칭하면서
다른 고객에게 피해를 줄 수 있는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>자신의 매장을 홍보할 목적으로 직접 또는 제3자(리뷰대행업체
등)을 통하여 부당한 방법으로 허위 또는 과장된 리뷰를 등록하는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>허위주문 등 부당한 방법으로 리뷰권한을 획득하여 고객
또는 제3자의 계정(명의도용)으로 리뷰를 등록하는 경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>고객의 개인정보(성명, 주소, 전화번호 등)를 무단 노출하는
경우</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt'>●<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:"Arial Unicode MS",sans-serif'>회사의 법적, 사회적 평판을 훼손할 수 있는 경우</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:12.0pt;
margin-left:36.0pt;text-indent:-18.0pt'>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='font-family:"Arial Unicode MS",sans-serif'>기타 서비스 운영에 부정적인 영향을
미칠 수 있는 경우</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
회사가 부적합한 리뷰로 판단하여 리뷰를 삭제하거나 블라인드 처리한 경우 처리결과 및 그 사유를 게시판에 게시할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑤
고객의 게시물이 관련 법령에 위반되는 내용을 포함하는 경우, 판매자는 관련 법령이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할
수 있으며, 회사는 관련 법령에 따라 조치를 취하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제11조
(개인정보보호)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자는 서비스를 통해 제공받은 고객의 개인정보를 본 약관에 따른 서비스를 이용하기 위한 목적을 포함하여 회사가 고객으로부터 받은 개인정보 수집
• 이용 및 제3자 제공 동의서상의 목적 이외의 용도로 사용할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 개인정보보호를 위하여 배달 등의 목적 달성 후 판매자에게 제공된 고객의 개인정보를 비공개 조치할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
판매자는 관련 법령 및 방송통신위원회 고시에 따라 회사로부터 제공받은 고객의 개인정보보호를 위하여 기술적 • 관리적 보호조치를 취하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
회사는 판매자가 동의한 서비스 운영 이외의 목적으로 판매자가 제공한 개인정보를 이용할 수 없습니다. 회사가 판매자의 개인정보를 새로운 목적으로
사용하거나 제3자에게 제공하고자 할 경우 사용 또는 제공의 목적 등을 판매자에게 통지하고 별도의 동의를 얻어야 합니다. 단, 관련 법령 및 규정에서
달리 정하고 있는 경우에는 예외 적용할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑤
회사는 판매자가 개인정보의 수집, 이용 및 제공에 대한 동의를 거부할 경우 이용이 제한되는 서비스를 미리 특정하여야 하며, 서비스 운영에 필수적이지
않은 개인정보의 수집, 이용 및 제공에 대한 동의를 거부한 판매자에 대하여 서비스 이용을 제한하거나 거부할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑥
기타 개인정보의 보호 및 사용에 관한 사항은 관련 법령 및 회사의 개인정보 보호지침을 따르기로 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제12조
(지적재산권)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자가 앱 및 판매자 전용 앱에 게시한 게시물에 대한 저작권 등 지식재산권은 판매자에게 귀속됩니다. 단, 회사가 제작한 자료에 관한 지식재산권은
회사에게 있으며 판매자가 이를 회사의 동의 없이 사용할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자가 앱 및 판매자 전용 앱에 게시한 게시물의 적법한 권리자가 관련 법령이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청하는
경우 회사는 그에 따른 조치를 취할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사는 판매자의 상호, 상표, 사진, 컨텐츠 등(이하 “자료”라 합니다.)에 대하여 홍보, 판매 목적 편집∙사용권한만을 가지며, 회사는 동 목적으로만
판매자의 자료를 사용할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
판매자는 회사의 사전 동의 없이 회사의 명칭, 상표, 로고 등을 사용할 수 없으며, 회사와 판매자 간의 관계를 표시, 홍보할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제13조(판매자의
권리와 의무)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사와 판매자는 서로 독립적이며, 본 약관에 의해 회사와 판매자간 파트너쉽, 합작투자, 프랜차이즈, 대리인, 고용 또는 독점 관계 등을 구성하지
않습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자는 상품의 제작 및 판매, 배송/인도와 관련하여 선량한 관리자의 주의를 다하여야 하며, 상품의 제작 및 판매, 배송/인도와 관련한 법령을
모두 준수하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
판매자는 회사의 사전 서면 동의 없이 회사가 판매자 전용 앱을 통해 제공하는 통계자료 및 서비스 등에 대한 일체의 내용을 제3자에게 제공하거나
외부에 유출할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
판매자가 본조 제2항의 관련 법령을 위반하여 법적책임을 부담하는 경우 해당 사실 및 그 결과를 회사에 통지하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>⑤
판매자가 본 조의 의무를 위반하여 법적 책임을 부담하는 경우, 회사는 회사의 고의 또는 중과실이 없는 한 관련하여 어떠한 법적 책임도 부담하지
않으며 판매자는 해당 분쟁과 관련하여 회사를 면책시켜야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제14조(특정
금융거래정보의 보고 및 이용 등에 관한 법률에 따른 확인 조치 등)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사는 특정 금융거래정보의 보고 및 이용 등에 관한 법률(이하 “특금법”이라 합니다) 상의 의무를 이행하기 위해 판매자에게 판매자, 판매자의 대리인
또는 판매자를 최종적으로 지배하거나 통제하는 자연인의 신원 확인 등에 필요한 정보의 제출 등을 요구할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자는 회사가 특금법상 의무를 이행하기 위하여 요청하는 사항에 협조하여야 하며, 판매자가 회사의 요청에 협조하지 않거나, 특금법에 따라 거래
거절 • 종료하여야 하는 경우 회사는 이 약관에 따른 계약을 해지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제15조(환불정책)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>판매자의
귀책사유로 고객이 주문 • 결제한 상품을 구매 또는 제작할 수 없거나 그 사용에 현저한 불편을 초래한 경우(미공지 휴무, 재고부족, 앱 오류,
폐업, 상품누락, 이물질 발생 등) 또는 상품을 주문할 당시의 계약사항 및 이용조건과 실제 서비스 내용이 객관적으로 상이한 경우(상품 내용 변경
및 오표기 등 계약내용의 임의적 변경 등) 회사는 사회 통념상 고객이 주문 • 결제한 상품을 그 내용대로 이용할 수 없음이 합리적으로 인정되는
때, 해당 주문 • 결제 건을 취소하고 고객에게 환불 처리할 수 있고, 환불에 소요되는 비용과 책임은 판매자가 부담합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제16조
(비밀유지)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자는 서비스 사용 중 알게 된 회사 또는 서비스에 관한 모든 정보(서비스 이용 정보, 직접 또는 간접적으로 취득한 기술 및 사업정보, 고객
정보 및 문서, 전자 파일 등과 같은 형식을 취하는 기타 그 밖의 정보, 본 약관에서 명시된 당사자들의 권리 의무에 관한 세부사항 등을 포함하나
이에 제한되지 않음, 이하 &quot;기밀정보&quot;라 합니다.)를 본 약관의 이행, 서비스의 사용, 서비스를 통한 고객과의 거래 수행 등
본 약관에서 정한 목적 이외의 목적으로 사용해서는 안됩니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자는 회사의 사전 서면 동의 없이 기밀정보를 복사, 복제 또는 가공하거나 제3자에게 제공, 판매, 홍보 또는 공개할 수 없으며, 고의 또는
과실로 인한 제3자에 대한 기밀 정보 유출에 대하여 모든 책임을 부담합니다. (제3자에 대한 손해 및 복구를 포함하나 이에 제한되지 않음)</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
판매자와 회사의 계약이 종료된 경우, 판매자는 지체없이 기밀정보를 모두 파기하여야 하며, 회사는 판매자에게 기밀정보 파기에 대한 확인을 요구할
수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
본 조의 의무는 본 약관에 의한 계약이 종료된 후에도 그 효력이 유지됩니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제17조
(계약의 해지)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자는 회사에 대하여 서면 또는 서비스에 의한 의사 표시로 본 계약을 해지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 회사는 제8조 제2항 각 호의 어느 하나에 해당하는 사유가 발생한 경우에는 판매자에게 통지함으로써 본 계약을 해지할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
제1항 또는 제2항에 따라 본 계약을 해지되는 경우 판매자가 판매한 상품으로 인해 발생하는 판매자의 의무 및 책임에 관한 본 약관 상의 조항은
본 조항에 따라 본 약관이 해지된 이후에도 유효하게 존속됩니다. 판매자는 계약 해지의 효력이 발생하기 전에 접수된 주문에 대하여 배달, 교환,
환불, 수리 등 필요한 조치를 취하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제18조
(손해배상책임</span></b><span style='font-family:"맑은 고딕",sans-serif'>)</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사 또는 판매자가 본 약관에서 정한 사항을 위반함으로써 상대방에게 손해가 발생한 경우 귀책사유 있는 일방은 상대방 또는 제3자에게 발생한 모든
손해를 배상하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
판매자는 본 약관 및 관련 법령상 의무를 불이행하는 등 판매자의 귀책사유로 인하여 발생하는 서비스 이용상의 손해 또는 제3자의 부정사용 등으로
인한 손해를 배상할 책임이 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제19조
(면책)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
판매자가 판매한 상품 또는 판매자가 등록 요청한 가게 및 상품 정보 등과 관련하여 고객과 분쟁이 발생하는 경우 회사의 고의 또는 중과실이 없는
한, 판매자가 모든 법적 책임을 부담합니다. 단, 회사는 분쟁을 합리적으로 해결하기 위하여 회사가 설립 및 운영하는 분쟁 조정 센터(고객센터)를
통하여 분쟁해결방안을 결정하여 권고할 수 있으며, 판매자는 분쟁조정센터가 권고한 분쟁해결방안을 존중하여야 합니다. 분쟁 미해결시 사안에 따라 공정거래위원회,
방송통신위원회, 시/도지사가 의뢰하는 분쟁조정기관의 조정을 따를 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
회사는 제1항과 관련하여 제3자에게 손해를 배상하여 주거나 기타 비용을 지출한 경우에는 판매자에 대해 구상권을 행사할 수 있습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
컴퓨터를 포함한 IT장비와 관련된 수리, 검사, 교환, 고장, 통신두절 등을 포함한 천재지변 또는 이에 준하는 불가항력적인 상황이 발생한 경우,
회사는 서비스의 제공을 일시적으로 중단할 수 있고, 해당 상황이 회사의 고의 또는 중대한 과실에 기인하지 않는 한, 그에 대한 책임을 부담하지
않습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제20조
(약관의 변경)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>①
회사가 이 약관을 변경하고자 하는 경우에는 변경 1개월 전에 그 내용을 판매자 전용 앱에 게시하거나 이메일 또는 기타 수단을 통해 통지하여야 합니다.
판매자가 게시 또는 통지 여부에 대한 이의를 제기할 경우 회사는 판매자에게 적절한 방법으로 약관 변경 내용을 게시 또는 통지하였음을 확인해 주어야
합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>②
제1항에도 불구하고 법령의 개정으로 인하여 긴급하게 약관을 변경한 때에는 변경된 약관을 판매자 전용 앱에 최소 1개월 이상 게시하고 판매자에게
통지하여야 합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>③
회사가 제1항 및 제2항의 게시하거나 통지를 하는 경우에는 “판매자가 약관의 변경 내용이 게시되거나 통지된 후부터 변경되는 약관의 시행일 전 영업일까지
계약을 해지할 수 있으며, 약관의 변경내용에 이의를 제기하지 아니하는 경우 약관의 변경내용을 승인한 것으로 본다.”라는 취지의 내용을 통지하여야
합니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>④
판매자는 약관의 변경내용이 게시되거나 통지된 후부터 변경되는 약관의 시행일 전 영업일까지 계약을 해지할 수 있고, 약관의 변경 내용에 대하여 이의를
제기하지 아니하는 경우에는 약관의 변경을 승인한 것으로 봅니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제21조
(관련 법령과의 관계)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>본
서비스의 책임과 관련하여 금융혁신지원특별법, 전자금융거래법, 은행법 등 다른 법령에 판매자에게 유리하게 적용될 수 있는 사항이 있는 경우 그 법령이
우선 적용됩니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제22조
(권리 및 의무의 양도금지)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>본
약관의 각 당사자는 이 약관에 따른 권리와 의무를 다른 당사자들의 사전 동의 없이 제3자에게 양도할 수 없습니다.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"맑은 고딕",sans-serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"맑은 고딕",sans-serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><b><span style='font-family:"Arial Unicode MS",sans-serif'>제23조
(관할법원)</span></b></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm'><span style='font-family:"Arial Unicode MS",sans-serif'>본
약관상의 해석이나 이해에 있어 상호 이견이 발행한 경우에는 상호 협의에 의한 해결의 원칙으로 하되, 합의가 이루어지지 아니하여 소송을 제기하는
경우 관할법원은 민사소송법에서 정하는 바에 따릅니다.</span></p>

</div>

</body>

</html>
`

export default Setting