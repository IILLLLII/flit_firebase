import React, { useEffect, useState } from "react";
import axios from 'axios';


export async function hacto_card(value){
    try{
        const card_to = await axios.post('https://tbnpg.settlebank.co.kr/card/main.do',
        {
            env: "https://tbnpg.settlebank.co.kr/resources/js/v1/SettlePG_v1.2.js",
            mchtId: "nxca_jt_il",
            method: "card",
            trdDt: "20211231",
            trdTm: "100000",
            mchtTrdNo: "ORDER20211231100000",
            mchtName: "헥토파이낸셜",
            mchtEName: "Hecto Financial",
            pmtPrdtNm: "테스트상품",
            trdAmt: "AntV/eDpxIaKF0hJiePDKA==",
            mchtCustNm: "홍길동",
            custAcntSumry: "헥토파이낸셜",
            notiUrl: "https://example.com/notiUrl",
            nextUrl: "https://example.com/nextUrl",
            cancUrl: "https://example.com/cancUrl",
            mchtParam: "name=HongGilDong&age=25",
            custIp: "127.0.0.1",
            pktHash: "f395b6725a9a18f2563ce34f8bc76698051d27c05e5ba815f463f00429061c0c",
            ui: {
                type: "popup",
                width: "430",
                height: "660"
            }
        },
        {
            headers  : {
                'Content-type' :'application/x-www-form-urlencoded; charset=UTF-8',

            }
        })
    }catch(e){
        console.error(e);
    }
}