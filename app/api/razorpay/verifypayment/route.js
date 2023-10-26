import Razorpay from "razorpay";
// import { NextResponse } from 'next/server';
// var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

export async function POST(req){
    console.log("HI")
// validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
}