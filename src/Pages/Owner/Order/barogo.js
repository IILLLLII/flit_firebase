import axios from 'axios';
import React, { useCallback, useEffect, useState } from "react";
import { addDoc, and, collection, deleteDoc, doc, getDoc, getDocs, limit, or, orderBy, query, updateDoc, where } from "firebase/firestore"
import { db } from "./firebase-config"

async function postOrder(){
    try{
        const response = await axios.post('https://staging-api-interlocker.gorelas.com/api/orders',{
            Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZVc2VySWQiOjExNzcsImFwaUtleUlkIjoyMTAyLCJyb2xlIjoib3JkZXJBZ2VuY3lNYW5hZ2VyIiwib3JkZXJBZ2VuY3lJZHMiOlsiaWxsaV90ZXN0Il0sImlhdCI6MTY4MTQ0NjYwMywiZXhwIjoxODM5MTI2NjAzfQ.zipx3YoB5JnCinWRhddQbIyXpQdl-u7J3p3RTAcROPU",
            baseType: "ADDRESS_TO_ADDRESS",//주소(add to add)
            orderType: "FOR_DELIVERY",//연동형태(FOR_DELIVERY)
            orderAgencyId: "gorela_chicken",//주문 제휴사 아이디
            orderAgencyOrderId: "TEST_00000123",//주문 제휴사 주문 아이디
            orderAgencyDailyOrderId: "101",//주문 제휴사 당일 주문 아이디
            totalPayPrice: 30000, //총 결제 금액
            actualPayPrice: 28000,//실제 결제 금액
            prepaidPrice: 8000,//선결제 금액
            prepaidMethod: "CARD",//선결제 수단
            paymentCashPrice: 10000,//후불 현금 결제 금액
            paymentCardPrice: 10000,//후불 카드 결제 금액
            taxFreePayPrice: 0,//일회용 컵 반환 보증금 후불 결제 금액 (default: 0)
            orderProducts: [
              {
                type: "FOOD",//상품 유형 (배달팁도 하나의 상품으로 취급 = DELIVERY_TIP)
                name: "맛있는 후라이드 치킨",//상품 이름
                totalPrice: 28000,//상품 총 금액 (상품 금액과 해당 상품에 포함된 옵션 금액의 합계 금액)
                unitPrice: 12000,//상품 단가
                quantity: 2,//상품 수량
                options: [//옵션 상품 목록
                  {
                    group: "SAUCE",//
                    name: "소스 추가",//옵션 이름
                    unitPrice: 1000,//옵션 단가
                    quantity: 2//옵션 수량
                  }
                ]
              },
              {
                type: "DELIVERY_TIP",
                name: "배달팁",
                totalPrice: 2000,
                unitPrice: 2000,
                quantity: 1
              }
            ],
            ordererPhone: "01012341234",//주문자(고객) 연락처
            receiverPhone: "01011112222",//수령자(고객) 연락처
            ordererName: "홍길동",//주문자(고객) 이름
            receiverName: "임꺽정",//수령자(고객) 이름
            ordererOrderMemo: "맛있게 부탁드립니다.",//상점의 요청 사항(배달대행사에게 전달)
            orderChannel: "ETC",//주문 유입 채널
            isReservation: false,//예약 주문 여부
            dropWishAt: null,//드랍 희망 일시 (timestamp) [ 현재시간으로부터 90분 이후 .. 2개월 이내
            reservedOrderDisplayTime: null,//라이더앱 노출 시간 (분)* dropWishAt 기준으로 라이더에게 주문이 몇 분 전에 노출되어야 하는지 입력받는 시간(분)입니다.
            pickupWishAt: 1674720000000,//픽업 희망 일시 (timestamp)
            //실시간 배달(isReservation false)인 경우 - 픽업희망일시(pickupWishAt)는 현재시간 + 90분 이내를 허용
            //예약 배달(isReservation true)인 경우 - dropWishAt - 라이더앱 노출시간 < pickupWishAt < dropWishAt – 20분
            hasAlcoholicBeverage: false,
            isUntact: true,//비대면 배달 여부
            pickupId: "c7b61777-f091-4b2d-b50e-083171e9196d",//픽업지 식별 아이디
            pickupName: "고릴라 치킨 청담점",//픽업지 이름 (설명)
            pickupPhone: "021231234",//픽업지 연락처
            pickupRoadAddress: "서울특별시 강남구 도산대로55길 20 영빌딩 1층",//픽업 도로명 주소
            pickupJibunAddress: "서울특별시 강남구 청담동 88-5",//픽업 지번 주소 (법정동)
            pickupAddressDetail: "1층",//픽업 상세 주소
            dropRoadAddress: "서울특별시 강남구 언주로 134길 32",//드랍 도로명 주소
            dropJibunAddress: "서울특별시 강남구 논현동 117",//드랍 지번 주소 (법정동)
            dropAddressDetail: "5층 505호",//드랍 상세 주소
            bundleDeliveryCount: 1,//묶음 배달 건수 (값이 없을 시 제한 없음)
            orderAgencyOrderCreatedAt: 1674718800000//주문 제휴사에서 관리하는 실제 주문자(고객)의 주문 접수 일시 (timestamp
        });
        console.log(response);
    }catch (e){
        console.error(e);
    }
};

async function postOrderchange(){
    try{
        const response = await axios.post('https://staging-api-interlocker.gorelas.com/delivery/status',{
            Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZVc2VySWQiOjExNzcsImFwaUtleUlkIjoyMTAyLCJyb2xlIjoib3JkZXJBZ2VuY3lNYW5hZ2VyIiwib3JkZXJBZ2VuY3lJZHMiOlsiaWxsaV90ZXN0Il0sImlhdCI6MTY4MTQ0NjYwMywiZXhwIjoxODM5MTI2NjAzfQ.zipx3YoB5JnCinWRhddQbIyXpQdl-u7J3p3RTAcROPU",
            orderAgencyId: "gorela_chicken",//주문 제휴사 아이디
            orderAgencyOrderId: "TEST_00000123",//주문 제휴사 주문 아이디
            orderAgencyStoreId: "gorela_chicken_store_1",//주문 제휴사 상점 아이디
            orderId: 230127171824940,//고릴라 주문 아이디
            deliveryId: 230127171825111,//고릴라 배달 아이디
            deliveryAgencyId: "barogo",//배달대행사 아이디
            deliveryStatus: "PICKUP_FINISHED",
            changedAt: 1674808522881,
            driverPhone: "01099999999",
            hubPhone: "021231234",
            totalDeliveryPrice: 3800,
            deliveryPrice: 3300,
            totalExtraCharge: 500,
            extraCharges: [
              {
                dataType: "FIXED",
                type: "WEATHER",
                charge: 500
              }
            ],
            VATPrice: 380,
            deliveryDistance: 1320,
            dropImageUrl: null,
            alcoholicBeverageSignImageUrl: null,
            totalDeliveriesPrice: 3800
        });
        console.log(response);
    }catch (e){
        console.error(e);
    }
};
async function getorder_del_all(){
  try{
    const response = await axios.get('https://staging-api-interlocker.gorelas.com/api/orders');
    console.log(response);
  }catch (e){
    console.log(e);
  }
};
async function getorder_del_one(order_id){
  var orders_num = order_id;
  try{
    const response = await axios.get('https://staging-api-interlocker.gorelas.com//api/orders/'+orders_num+'');
    console.log(response);
  }catch (e){
    console.log(e);
  }
};