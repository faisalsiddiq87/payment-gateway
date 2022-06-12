import Head from "next/head";
import { Navbar } from "../components/Navbar";
import {selectGateWay} from "../components/Payment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Acme Payment GateWay</title>
        <meta name="description" content="Payments in your React and Next.js application with TailwindCSS and Razorpay"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
        <Navbar />
        <Hero onClick={selectGateWay('razorPay')} />
      </main>
    </div>
  );
}

const Hero = ({ onClick }) => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center  max-w-6xl justify-evenly mx-auto">
      <div className="md:w-1/3 mb-20 md:mb-0 mx-10">
        <h1 className=" text-white font-bold text-5xl mb-10">
          Do your Transactions with {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-500">
            Acme
          </span>{" "}
          Payment Gateway
        </h1>
        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
          <button onClick={onClick} className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold">
            Make a Payment!
          </button>
        </div>
      </div>
    </div>
  );
};