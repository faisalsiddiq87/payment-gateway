import React from 'react';
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import {getTransactionsHistory} from "../components/gateways/RazorPayment";

export default function Home({getTransactions}) {
    return (
        <div>
            <Head>
                <title>Acme Payment GateWay Transactions</title>
                <meta name="description" content="Payments in your React and Next.js application with TailwindCSS and Razorpay"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
                <Navbar />
                <Table data={getTransactions} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const getTransactions = await getTransactionsHistory();
    return { props: {getTransactions},};
}

const Table = (allTransactions) => {
  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Transaction ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Currency
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTransactions && allTransactions.data.items.length>0 ? allTransactions.data.items.map((datalist, key) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={datalist.id}>  
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{key+1}</td>
                                    <td className="px-6 py-4">
                                        {datalist.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {datalist.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {datalist.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {datalist.currency}
                                    </td>
                                    <td className="px-6 py-4">
                                        {datalist.status == "captured" ?<span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Captured</span>
                                        :<span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Failed</span>} 
                                    </td>
                                </tr>
                            )): <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={1}>  
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" colSpan={5}>
                                    NO Transactions Found
                                    </td>
                                </tr> 
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)};