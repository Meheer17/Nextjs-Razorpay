'use client';
import { useState, useEffect } from 'react'
import Script from 'next/script';
// import Razorpay from 'razorpay';

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting){
            if(true){
                setIsSubmitting(false)
                createProject();
            } else {
            }
        }
    })

    async function createProject () {
        try {
            const data = await fetch(`https://nextjs-razorpay.vercel.app/api/razorpay/createpayment`, {
                method: 'POST',
                headers:{
                    "Accept":"applocation/json",
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    amount: 500,
                    contact: 8310697451,
                    name: "meheer",
                    email: "meherr17.j@gmail.com",
                    description: "Hello there!!",
                })
            })
            const res = await data.json()
            if(res.success){
                var options = {
                    "key": ""+res.key_id+"",
					"amount": ""+res.amount+"",
					"currency": "INR",
					"name": ""+res.product_name+"",
					"description": ""+res.description+"",
					"image": "https://dummyimage.com/600x400/000/fff",
					"order_id": ""+res.order_id+"",
					"handler": async function (response){
                        const det = await fetch(`https://nextjs-razorpay.vercel.app/api/razorpay/verifypayment`, {
                            method: 'POST',
                            headers:{
                                "Accept":"applocation/json",
                                "Content-Type": 'application/json'
                            },
                            body: JSON.stringify({
                                pid: response.razorpay_payment_id,
                                oid: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            })
                        })
                        const verify = await det.json()
						console.log(await verify)
						// console.log(instance.payments.fetch(response.))
						alert(response);
						// window.open("/","_self")
					},
					"prefill": {
						"contact":""+res.contact+"",
						"name": ""+res.name+"",
						"email": ""+res.email+""
					},
					"notes" : {
						"description":""+res.description+""
					},
					"theme": {
						"color": "#2300a3"
					} 
                }
                var razorpayObject = new Razorpay(options);
                razorpayObject.on('payment.failed', function(response){
                    alert("Payment Failed");
                });
                razorpayObject.open()
            } else {
                alert("HEHEHHE")
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitting(true)
    }
        
  return (
        <>
            <div style={{display:"inline-block"}}>
                <p>Shirt</p>
                <p><b>Amount:- Rs. 500</b></p>
                <form className="pay-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="name" value="Shirt"/>
                    <input type="hidden" name="amount" value="500"/>
                    <input type="hidden" name="description" value="Shirt Buying"/>
                    <button type='submit' >Pay Now </button>
                </form>
            </div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
        </>
  )
}
