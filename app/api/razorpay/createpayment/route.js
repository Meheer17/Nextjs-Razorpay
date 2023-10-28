import Razorpay from "razorpay";
import { NextResponse } from 'next/server';

var razorpayInstance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

export async function POST(req){
    const details = await req.json()
    const amount = details.amount*100
    const {name, email, contact, description } = details
    const options = {
        amount: amount,
        currency: 'INR',
        receipt: 'razorUser@gmail.com'
    }
    let error = false
    let orde;
    const data = await razorpayInstance.orders.create(options, 
        (err, order)=>{
            if(!err){
                orde = order
                error = false

            }
            else{
                error = true
                console.log(err)
            }
        }
    );
    if(!error){
        return NextResponse.json({
            success:true,
            msg:'Order Created',
            order_id:orde.id,
            amount:options.amount,
            key_id:process.env.KEY_ID,
            product_name: name,
            description: description,
            contact: contact,
            name: name,
            email: email
        });
    } else {
        return NextResponse.json({success:false,msg:'Something went wrong!'});
    }
}