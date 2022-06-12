export  async function makePayment () {
    const res = await initializeRazorpay();

    if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
        t.json()
    );

    var options = {
        key: process.env.RAZORPAY_KEY,
        name: process.env.TEST_COMPANY,
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for making the donation",
        image: "https://acmeholdings.com.my/wp-content/uploads/2018/08/logo-acme.png",
        handler: function (response) {
        },
        prefill: {
        name: process.env.TEST_USER,
        email: process.env.TEST_EMAIL,
        contact: process.env.TEST_PHONE,
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
    
export async function initializeRazorpay() {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";

        script.onload = () => {
        resolve(true);
        };

        script.onerror = () => {
        resolve(false);
        };

        document.body.appendChild(script);
    });
};

export async function getTransactionsHistory() {
    const data = await fetch(process.env.BASE_URL + "/api/razorpay", { method: "GET" }).then((t) =>
        t.json()
    );

    return data;
};