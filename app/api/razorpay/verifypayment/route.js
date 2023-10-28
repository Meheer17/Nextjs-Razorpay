import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import cryptoJs from "crypto-js";
// import { NextResponse } from 'next/server';
// var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

export async function POST(req){
    const data = await req.json()
    const generated_signature = cryptoJs.HmacSHA256(data.oid + "|" + data.pid, process.env.KEY_SECRET);
    if (generated_signature == data.razorpay_signature) {
        return NextResponse.json({success: true})
    } 
    return NextResponse.json({success: false})
}