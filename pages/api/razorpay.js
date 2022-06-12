const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
   // Initialize razorpay object
   const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  if (req.method === "POST") {
    const payment_capture = 1;
    const amount = process.env.PAYMENT_INITIAL_AMOUNT;
    const currency = process.env.PAYMENT_CURRENCY;
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Fetches all payments
    try {
      const response = await razorpay.payments.all();
      res.status(200).json({
        items: response.items
      });  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}