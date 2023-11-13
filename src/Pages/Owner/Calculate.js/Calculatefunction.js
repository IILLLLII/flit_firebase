import React, { useEffect, useState } from "react";
import { addDoc, and, collection, deleteDoc, doc, getDoc, getDocs, limit, or, orderBy, query, updateDoc, where } from "firebase/firestore"
import { useLocation } from "react-router-dom";
import { compareDate, formattedAmount, getAllList, getOrderList, getOwner, getOwnersettlementday } from "../../../DB/function";

export async function NowSettlement(){
    try{
        const owner = await getOwner('1qfu9Pcn1l125fRqti5g');
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        const timestamp = new Date(today).getTime();
        let type = owner.settlement.type;
        let settlementday = owner.settlement.date;
        let nowSettlementday = null;
        if(type === "2"){
            console.log('주마다결제')
        }else{
            if(date > settlementday){
                settlementday = settlementday + 1;
                nowSettlementday = ''+year+'.'+month+'.'+settlementday+'';
                console.log(nowSettlementday)
                const [s_year, s_month, s_date] = nowSettlementday.split('.').map(Number);
                const s_timestamp = new Date(s_year, s_month-1, s_date).getTime();
                const e_timestamp = new Date().getTime();
                const filter = {
                    keyword: '',
                    type: '상품명',
                    order: '등록순',
                    date: '등록일',
                    start: s_timestamp,
                    end: e_timestamp,
                }
                const order = await getOrderList(filter);
                let collback = 0;
        
                const calculateTotalPay = () =>{
                    const totalPay = order.reduce((acc, item)=>{
                        return acc + item.totalpayment
                    }, 0);
                    collback = totalPay;
                    collback = collback - (collback/0.1)
                    return collback;
                }
                
                return calculateTotalPay;
                
            }else{
                console.log('정산일이 지나지 않았을때 금월에서');
            }   
        }
    }catch(e){
        console.error(e);
    }  
}
export async function setdatePayment(s_date,e_date){
    try{
        const filter = {
            keyword: '',
            type: '상품명',
            order: '등록순',
            date: '등록일',
            start: s_timestamp,
            end: e_timestamp,
        }
        const order = await getOrderList(filter);
        let collback = 0;

        const calculateTotalPay = () =>{
            const totalPay = order.reduce((acc, item)=>{
                return acc + item.totalpayment
            }, 0);
            collback = totalPay;
            collback = collback - (collback/0.1)
            return collback;
        }
        return calculateTotalPay;
    }catch(e){
        console.error(e);
    }
}