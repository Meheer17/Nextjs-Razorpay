# Next.js with Razorpay

### Description
Using the Next.js full stack framework and Razorpay Api, I have integrated the payment gateway with the website, and this can be used as a reference to build the backend for the payment gateway. 
The website also has a endpoint to verify the payment which uses HmacSHA256 method as mentioned in the Razorpay API Documentation.

## Getting Started
### Prerequisites
We need only 2 keys, from the razorpay dashboard, KEY_ID and KEY_SECRET.

### Installation
```
# Clone the repository
git clone https://github.com/meheer17/nextjs-razorpay.git

# Change directory
cd nextjs-razorpay

# Install dependencies
npm install

# Start the development server
npm run dev

```

### Usage
To test the payment, click `Pay Now`, after the payment option pops up on the screen select the upi_id option, and the input of the upi_id as `success@razorpay` or to fail the payment `failure@razorpay`

### Configuring Payment Gateway
Add your API Keys to the .env file with the field names as KEY_ID and KEY_SECRET
