import { Card, Container, HStack, VStack, Text, CheckboxGroup, Checkbox, RadioGroup, Radio, Input, InputGroup, NumberInput, NumberInputField, InputRightAddon, Center, Button } from "@chakra-ui/react";
import ImageUploader from "../../../Components/ImageUploader";
import { useEffect, useState } from "react";

import {
	addDoc,
	collection,
	doc,
	getDocs,
	getDoc,
	getFirestore,
	orderBy,
	query,
	updateDoc
} from "firebase/firestore";
import { db, storage } from '../../../DB/firebase-config'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { v4 } from 'uuid'
import { useLocation, useNavigate } from "react-router-dom";

export default function CouponAdd() {
	const navigate = useNavigate();
	const location = useLocation();
	const [checkedItems, setCheckedItems] = useState([false, false, false])
	const [couponName, setCouponName] = useState("");
	const [discountType, setDiscountType] = useState("%");
	const [discountValue, setDiscountValue] = useState(0);
	const [expireDate, setExpireDate] = useState("");
	const [couponImage, setCouponImage] = useState();
	const [couponImageUrl, setImageUrl] = useState();

	useEffect(() => {
		if (location.state.mode === "edit") {
			console.log("edit", location.state.docId)
			getCoupon(location.state.docId)
		}
	}, []);

	const getCoupon = async (key) => {
		console.log(key)
		const couponRef = doc(db, "Coupon", key);
		const coupon = await getDoc(couponRef);

		setCheckedItems([coupon.data().customer, coupon.data().store, coupon.data().florist]);
		setCouponName(coupon.data().couponName);
		setDiscountType(coupon.data().discountType);
		setDiscountValue(coupon.data().discountValue);
		setExpireDate(coupon.data().expireDate);
		// setCouponImage();
		setImageUrl(coupon.data().imageUrl);

		console.log("EDIT!!!", key, coupon.data().imageUrl)
	}

	const saveCoupon = async () => {
		console.log(checkedItems, couponName, discountType, discountValue, expireDate, couponImage)

		if (location.state.mode === "edit") {
			const couponRef = doc(db, "Coupon", location.state.docId);

			// Set the "approve" field to isApprove
			await updateDoc(couponRef, {
				customer: checkedItems[0],
				store: checkedItems[1],
				florist: checkedItems[2],
				couponName: couponName,
				discountType: discountType,
				discountValue: discountValue,
				expireDate: expireDate,
				imageUrl: couponImageUrl
			});
		}
		else {
			const doc = await addDoc(collection(db, "Coupon"), {
				customer: checkedItems[0],
				store: checkedItems[1],
				florist: checkedItems[2],
				couponName: couponName,
				discountType: discountType,
				discountValue: discountValue,
				expireDate: expireDate,
				imageUrl: couponImageUrl
			})

		}
		navigate(-1);
	}

	const uploadFile = (file) => {
		if (file == null) return;
		var url = file.name + v4();

		const imageRef = ref(storage, `coupon/${url}`)

		uploadBytes(imageRef, file).then((snapshot) => {
			// 업로드 되자마자 뜨게 만들기
			getDownloadURL(snapshot.ref).then((url) => {
				setImageUrl(url)
				console.log(url)
			});
		})
	}

	const setFile = (file) => {
		setCouponImage(file)
	}

	return (
			<Container maxW={'container.md'} p={2}>
				<Card p={8}>
					<VStack spacing={8}>
						<HStack w={'100%'}>
							<Text w={100} >고객</Text>
							<CheckboxGroup>
								<HStack spacing={4}>
									<Checkbox isChecked={checkedItems[0]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])} colorScheme="pink" size={'lg'}>Customer</Checkbox>
									<Checkbox isChecked={checkedItems[1]} onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2]])} colorScheme="pink" size={'lg'}>Store</Checkbox>
									<Checkbox isChecked={checkedItems[2]} onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked])} colorScheme="pink" size={'lg'}>Florist</Checkbox>
								</HStack>
							</CheckboxGroup>
						</HStack>
						{/* <HStack w={'100%'}>
							<Text w={100} >유형</Text>
							<RadioGroup>
								<HStack spacing={4}>
									<Radio>개인</Radio>
									<Radio>기업</Radio>
								</HStack>
							</RadioGroup>
						</HStack> */}
						<HStack w={'100%'}>
							<Text w={100} marginRight={4} >쿠폰이름</Text>
							<Input defaultValue={couponName} onChange={(e) => setCouponName(e.target.value)} />
						</HStack>
						<HStack w={'100%'}>
							<Text w={100} marginRight={4}>할인</Text>
							<VStack alignItems={'flex-start'} width={"100%"}>
								<RadioGroup onChange={setDiscountType} value={discountType}>
									<HStack spacing={4}>
										<Radio value={"%"} colorScheme="pink">%</Radio>
										<Radio value={"원"} colorScheme="pink">원</Radio>
									</HStack>
								</RadioGroup>
								<InputGroup size={['sm', 'md']}>
									<NumberInput value={discountValue}>
										<NumberInputField onChange={(e) => setDiscountValue(e.target.value)} name='discount' borderRadius='8px 0 0 8px' />
									</NumberInput>
									<InputRightAddon children={discountType} />
								</InputGroup>
							</VStack>

						</HStack>
						<HStack w={'100%'}>
							<Text w={100}>쿠폰 만료기간</Text>
							<VStack alignItems={'flex-start'} spacing={4}>
								<Input defaultValue={expireDate} type="date" onChange={(e) => setExpireDate(e.target.value)} />
								{/* <DateTimePicker type={'date'} /> */}
							</VStack>
						</HStack>

						<HStack w={'100%'}>
							<Text w={100} >쿠폰 이미지</Text>
							<VStack alignItems={'flex-start'}>

								<ImageUploader defaultValue={couponImageUrl} w={500} h={200} setFile={setFile} delImage={() => { setFile(null); setImageUrl(""); }} />
								<Text fontSize={'sm'} color={"#8c8c8c"}>
									권장 크기 : 500 x 200
								</Text>
							</VStack>
						</HStack>
						<Center mt={8} mb={2}>
							<Button onClick={() => navigate(-1)} mr={3}>취소하기</Button>
							<Button onClick={() => { uploadFile(couponImage); saveCoupon(); }} colorScheme={'pink'}>저장하기</Button>
						</Center>
					</VStack>
				</Card>

			</Container>
	)
}