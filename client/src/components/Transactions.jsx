import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

import { FaWallet } from "react-icons/fa"
import { SiEthereum } from "react-icons/si"

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  // const gifUrl = useFetch({ keyword });
  
  return (
    <div className="m-4 flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-4 rounded-3xl hover:shadow-2xl white-glassmorphism border hover:border-pink-700 hover:bg-[#141414] transition hover:duration-700"
    >
      <div className="flex flex-col w-full mt-3">
        {/* <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        /> */}
        <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
          <p className="text-white text-base flex">From: <FaWallet fontSize={20} color="#fff" className="mx-2" />{shortenAddress(addressFrom)}</p>
        </a>
        <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
          <p className="text-white text-base flex">To: <FaWallet fontSize={20} color="#fff" className="mx-2"/>{shortenAddress(addressTo)}</p>
        </a>
        <p className="text-white text-base mb-3 flex">Amount: <SiEthereum fontSize={30} color="#fff"/> {amount} ETH</p>
          

          <div className="transaction-card p-3 px-5 w-full rounded-3xl shadow-2xl ">
            {keyword ?
              <p className="text-black text-base font-bold">Keyword: {keyword}</p>:
              <p className="text-[#3b3a3b] text-base font-bold">No Keywords Attached</p>
            }
            {message ? 
              <p className="text-black text-base">Message: {message}</p>:
              <p className="text-[#3b3a3b] text-base">No Message included.</p>
            }
            <p className="text-[#3b3a3b] font-bold hover:text-pink-700 transition hover:duration-700">{timestamp}</p>
          </div>

        <div className="flex justify-center w-full">
          {/* <div className="bg-white p-3 px-5 w-full rounded-3xl -mb-10 shadow-2xl">
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center mt-10">
          {[ ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
