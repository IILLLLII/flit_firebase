import { addDoc, and, collection, deleteDoc, doc, getDoc, getDocs, limit, or, orderBy, query, updateDoc, where } from "firebase/firestore"
import { db } from "./firebase-config"
import { filter } from "@chakra-ui/react"
import { isAdmin } from "../App"

export const addDocument = async (collectionId, newData) => {
  const doc = await addDoc(collection(db, collectionId), newData)
  return doc
}

export const deleteDocument = async (collectionId, docId) => {
  const doc_ = doc(db, collectionId, docId);
  const res = await deleteDoc(doc_);
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

  return {..._doc.data(), id: _doc.id};
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
export const getSubmitList = async (filter) => {

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

export const getShopProductList = async (ownerId) => {
  const q = query(collection(db, 'Product'), where("ownerId", "==", ownerId))

  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    result = [...result, { ...doc.data(), id: doc.id }]
  })
  return result;
}

export const getProductList = async (filter) => {

  let field = 'regist_date';
  if (filter.order == "등록순")
    field = 'regist_date'
  else if (filter.order == "관심순")
    field = 'goods'
  else if (filter.order == "리뷰순")
    field = 'review'
  else if (filter.order == "판매순")
    field = 'sales_count'

  const q = query(collection(db, 'Product'), orderBy(field, "desc"))

  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    if (doc.data().ownerId == localStorage.getItem('ownerToken') || isAdmin) {
      if ((filter.state.includes('품절') && (doc.data().count - doc.data().sales_count <= 0))
        || (filter.state.includes('판매종료') && (doc.data().count - doc.data().sales_count > 0) && !compareDate(doc.data().saletime.end) && doc.data().saletime.set == "설정함")
        || (filter.state.includes('판매중') && (doc.data().count - doc.data().sales_count > 0 && compareDate(doc.data().saletime.end) || doc.data().saletime.set == "설정안함"))) {

        if (parseDate(filter.start) <= parseDate(getDate(doc.data().regist_date)) && parseDate(filter.end) >= parseDate(getDate(doc.data().regist_date))) {
          if (filter.type === "상품명") {
            if (doc.data().product_name.includes(filter.keyword)) {
              result = [...result, { ...doc.data(), id: doc.id }]
            }
          }
          else if (filter.type === "상품코드") {
            if (doc.id.includes(filter.keyword)) {
              result = [...result, { ...doc.data(), id: doc.id }]
            }
          }
        }
      }
    }
  })

  console.log(filter, result)
  return result;
}

export const getPortfolioList = async (filter) => {

  let field = 'regist_date';
  if (filter.order == "등록순")
    field = 'regist_date'
  else if (filter.order == "관심순")
    field = 'goods'
  else if (filter.order == "리뷰순")
    field = 'review'

  const q = query(collection(db, 'Portfolio'), orderBy(field, "desc"))

  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    if (doc.data().ownerId == localStorage.getItem('ownerToken') || isAdmin) {
      if (parseDate(filter.start) <= parseDate(getDate(doc.data().regist_date)) && parseDate(filter.end) >= parseDate(getDate(doc.data().regist_date))) {
        if (filter.type === "상품명") {
          if (doc.data().product_name.includes(filter.keyword)) {
            result = [...result, { ...doc.data(), id: doc.id }]
          }
        }
        else if (filter.type === "상품코드") {
          if (doc.id.includes(filter.keyword)) {
            result = [...result, { ...doc.data(), id: doc.id }]
          }
        }
      }
    }
  })

  console.log(filter, result)
  return result;
}

export const getAccount = async (collectionId, type, value, password) => {
  const q = query(collection(db, collectionId), where(type, "==", value));
  const querySnapshot = await getDocs(q);
  let result = {};
  querySnapshot.forEach((doc) => {
    if (doc.data().password === password)
      result = { ...doc.data(), id: doc.id };
  })
  return result;
}

export const getShop = async (ownerId) => {
  const q = query(collection(db, 'Shop'), where("ownerId", "==", ownerId));
  const querySnapshot = await getDocs(q);
  let result = {};
  querySnapshot.forEach((doc) => {
    result = { ...doc.data(), id: doc.id };
  })

  console.log(result, ownerId)
  return result;
}

export const getPlan = async (ownerId, date) => {
  const q = query(collection(db, 'Plan'), where("ownerId", "==", ownerId));
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
    console.log(getStrDate(date), getDate(date), getDate(doc.data().month))
    if (getStrDate(date) === getDate(doc.data().month))
      result = [...result, { ...doc.data(), id: doc.id }]
  })

  return result;
}

export const getNotice = async (filter) => {
  const q = query(collection(db, 'Notice'), where('user', 'array-contains-any', filter.user))

  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
      if (doc.data().title.includes(filter.keyword) && doc.data().type === filter.type) {
        result = [...result, { ...doc.data(), id: doc.id }]
      }
  })

  console.log(filter, result)
  return result;
}

export const getReviewList = async(customerId) => {
  const q = query(collection(db, 'Review'), where('customerId', '==', customerId))
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
      result = [...result, { ...doc.data(), id: doc.id }]
})

return result;
}

export const getReview = async(productId) => {
  const q = query(collection(db, 'Review'), where('productId', '==', productId))
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
      result = [...result, { ...doc.data(), id: doc.id }]
})

return result;
}

export const getOrder = async(customerId) => {
  const q = query(collection(db, 'Order'), where('customerId', '==', customerId))
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
      result = [...result, { ...doc.data(), id: doc.id }]
})

return result;

}

export const getOrderList = async(filter) => {
  const q = query(collection(db, 'Order'), where('ownerId', '==', localStorage.getItem('ownerToken')))
  const querySnapshot = await getDocs(q);
  let result = []
  querySnapshot.forEach((doc) => {
      result = [...result, { ...doc.data(), id: doc.id }]
})

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

export function getStrDate(date) {
  return date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2)
}

export function getDate(timestamp) {
  var date = new Date(timestamp.seconds * 1000)

  if (date.getFullYear()) {
    date = new Date(timestamp.seconds * 1000)
  }
  else {
    date = new Date;
  }
  return date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2)
}

export function getTime(timestamp) {
  var date = new Date(timestamp.seconds * 1000)

  if (date.getFullYear()) {
    date = new Date(timestamp.seconds * 1000)
  }
  else {
    date = new Date;
  }
  return ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2)
}

export function parseDate(strDate) {
  var date = new Date();
  date.setFullYear(parseInt(strDate.split('-')[0]))
  date.setMonth(parseInt(strDate.split('-')[1] - 1))
  date.setDate(parseInt(strDate.split('-')[2]))

  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date;
}

export function compareDate(date) {
  let today = new Date;
  let year = parseInt(date.split('-')[0]);
  let month = parseInt(date.split('-')[1]);
  let day = parseInt(date.split('-')[2]);

  if (today.getFullYear() <= year) {
    if (today.getMonth() + 1 <= month) {
      if (today.getDate() >= day) {
        return true
      }
      else {
        return false
      }

    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

export const getOwner = async (ownerId) => {
  const docRef = doc(db, "Owner", ownerId);
  const _doc = await getDoc(docRef);

  //console.log("Data", id, _doc.data());

  return _doc.data()
}

export const getCustomer = async (customerId) => {
  const docRef = doc(db, "Customer", customerId);
  const _doc = await getDoc(docRef);

  //console.log("Data", id, _doc.data());

  return _doc.data()
}

export const isDuplication = async (collectionId, field, value) => {
  const q = query(collection(db, collectionId), where(field, "==", value))
  const querySnapshot = await getDocs(q);
  return querySnapshot.size
}
