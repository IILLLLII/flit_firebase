import { addDoc, and, collection, doc, getDoc, getDocs, or, query, updateDoc, where } from "firebase/firestore"
import { db } from "./firebase-config"

export const addDocument = async (collectionId, newData) => {
  const doc = await addDoc(collection(db, collectionId), newData)
  console.log(doc.id)
}

export const getList = async (type, state) => {
  const q = query(collection(db, type));
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    if (state === doc.data().state || state === "all")
      result = [...result, { ...doc.data(), id: doc.id }]
  })
  return result;
}

export const getDocument = async (collectionId, docId) => {
  const docRef = doc(db, collectionId, docId);
  const _doc = await getDoc(docRef);

  //console.log("Data", id, _doc.data());

  return _doc.data();
}

export const updateData = async (type, id, data) => {
  const docRef = doc(db, type, id);
  await updateDoc(docRef, data);
}


//# all data return
export const getAllList = async (collectionId) => {

  const q = query(collection(db, collectionId));
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    result = [...result, { ...doc.data(), id: doc.id }]
  })
  return result;

}

//# filtering
export const getSubmitList = async(filter) => {

  const q = query(collection(db, 'Owner'), and(where('division', 'in', filter.division), where('approve', 'in', filter.approve)))

  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    if (filter.type === "이름") {
      if (doc.data().name.includes(filter.keyword)) {
        result = [...result, { ...doc.data(), id: doc.id }]
      }
    }
    else if (filter.type === "전화번호") {
      if (doc.data().number.includes(filter.keyword)) {
        result = [...result, { ...doc.data(), id: doc.id }]
      }
    }
    else if (filter.type === "이메일") {
      if (doc.data().email.includes(filter.keyword)) {
        result = [...result, { ...doc.data(), id: doc.id }]
      }
    }
    else if (filter.type === "주소") {
      if (doc.data().address.includes(filter.keyword)) {
        result = [...result, { ...doc.data(), id: doc.id }]
      }
    }
  })

  console.log(filter, result)
  return result;
}

export const getAccount = async(email, password) => {
  const q = query(collection(db, 'Owner'), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let result = {};
  querySnapshot.forEach((doc) => {
    if(doc.data().password === password)
      result = { ...doc.data(), id: doc.id };
  })
  return result;
}

export const getShop = async(ownerId) => {
  const q = query(collection(db, 'Shop'), where("ownerId", "==", ownerId));
  const querySnapshot = await getDocs(q);
  let result = {};
  querySnapshot.forEach((doc) => {
      result = { ...doc.data(), id: doc.id };
  })

  console.log(result, ownerId)
  return result;
}










export const formattedAmount = (amount) => {
  return `${(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

const numberUnits = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const tenUnits = ["", "십", "백", "천"];
const thousandUnits = ["", "만", "억", "조", "경", "해"];

// 배열 쪼개기
export function chunkAtEnd(value = "", n = 1) {
  const result = [];

  for (let end = value.length; end > 0; end -= n) {
    result.push(value.substring(Math.max(0, end - n), end));
  }

  return result;
}

// 모든 숫자 바꾸기
export function formatNumberAll(number) {
  return chunkAtEnd(String(number), 4)
    .reduce((acc, item, index) => {
      if (!Number(item)) {
        return acc;
      }

      let numberUnit = "";

      const zeroNum = item.padStart(4, "0");

      for (let i = 0; i < 4; i++) {
        const number = Number(zeroNum[i]);

        if (number) {
          const unit = tenUnits[3 - i];

          numberUnit += `${unit && number === 1 ? "" : numberUnits[number]
            }${unit}`;
        }
      }

      const thousandUnit = thousandUnits[index] ?? "";

      return `${numberUnit + thousandUnit} ${acc}`;
    }, "")
    .trim();
}

export function getPath(str) {
  return str ? str.split('/')[str.split('/').length - 1].split('?')[0] : ""

}