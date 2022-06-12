## Integrate RazorPay Payment Gateway With Next.js 

# Features

- Make online payments on the fly
- Responsive layout
- Payment popup can be customized
- View all the transations with status

# Pages

There are 2 page `index.js` and `transactions.js`  that handles the transactions and listing.
Following are the important components to these pages

- `Navbar` - For the main navigation
- `Hero` - For the Hero section
- `Payment` - For the payment gateway configuration, will select razorpay or show gateway not found if provided any other, from landing page

# Installation and Usage

- Clone the repository using 
- Install all the modules by using `npm i` or `npm install` or `yarn install`
- Navigate to <a href="https://razorpay.com/" target="_blank">Razorpay</a> and create an account
- Generate the API keys in the Test Mode from Razor PAy dashboard and Save in .env file
- Build the next application by running `npm run build`
- Run the local  server by using `npm start`
- For getting the Test CC details <a href="https://razorpay.com/docs/payments/payments/test-card-upi-details/" target="blank">Check Here</a>

# Testing

- Run `npm run build` and `npm run start`
- After Above run `npm run cypress` in another terminal window to start Cypress Unit Testing

# Live Demo

- Check the Live demo <a href="https://payment-liart.vercel.app/" target="_blank">Here</a>