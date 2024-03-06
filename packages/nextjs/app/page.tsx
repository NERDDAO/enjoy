"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount, erc20ABI, useContractWrite } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";
import ApproveErc from "~~/components/ApproveERC";

const Home: NextPage = () => {
    const { address: connectedAddress } = useAccount();
    const [stakeAmount, setStakeAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const approve = useContractWrite({
    })
    const deposit = useScaffoldContractWrite({
        contractName: "erc20StakingPool",
        functionName: "stake",
        args: [BigInt(stakeAmount || "0")],
    });
    const withdraw = useScaffoldContractWrite({
        contractName: "erc20StakingPool",
        functionName: "withdraw",
        args: [BigInt(stakeAmount || "0")], // Use withdrawAmount, fallback to "0"
    });

    const claim = useScaffoldContractWrite({
        contractName: "erc20StakingPool",
        functionName: "getReward",
    });

    const callDeposit = async () => {
        await deposit.writeAsync();
    };
    const callWithdraw = async () => {
        await withdraw.writeAsync();
    };
    const callClaim = async () => {
        await claim.writeAsync();
    };
    return (
        <>
            <div className="flex items-center flex-col flex-grow pt-10">
                <div className="px-5">
                    <h1 className="text-center">
                        <ul className="flex flex-row">
                            <img className="flex max-w-xs items-center centered" src="./mobilefriday.png" />

                            <img className="flex max-w-xs items-center centered " src="./enjoy-con-letras.png" />
                        </ul>
                        <br />
                        <br />
                        <span className="block text-4xl font-bold width-69">
                            <span className="enjoy-accent">$ENJOY</span> is an ERC-20 token on Zora Network with a total supply of a
                            111,111,111,111 tokens. Launched in 2024 with an airdrop to onchain creators and collectors.{" "}
                            <span className="enjoy-accent">!!! Airdrop 1</span> is a distribution of{" "}
                            <span className="enjoy-accent">15% of the total supply</span>, directly into the hands of token enjoyoors.
                        </span>
                        <br />
                        <br />
                        <ApproveErc />
                        <span className="block text-4xl font-bold">
                            <span className="enjoy-accent">
                                Coming Soon</span>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <ul className="space-x-4 mt-6">
                            <button className="border-2 p-4 hover:enjoy-hover enjoy-button" onClick={callDeposit}>
                                Deposit
                            </button>
                            <button className=" border-2 p-4 hover:enjoy-hover enjoy-button" onClick={callWithdraw}>
                                Withdraw
                            </button>
                            <button className=" border-2 p-4 hover:enjoy-hover enjoy-button" onClick={callClaim}>
                                Claim
                            </button>
                        </ul>
                    </h1>
                    <div className="flex justify-center items-center space-x-2">
                        <p className="my-2 font-medium">Connected Address:</p>
                        <Address address={connectedAddress} />
                        <input onChange={e => setStakeAmount(parseInt(e.target.value))} value={stakeAmount} />
                    </div>
                    <br />
                    <br />
                    <span className="block text-4xl font-bold width-69">
                        <span className="enjoy-accent">!!! Airdrop 1 Criteria</span>
                        <br />
                        !!! Airdrop 1 will be generously distributed to:
                        <br />
                        +++Top Creators
                        <br />
                        +++Top Collectors
                        <br />
                        +++Top Holders
                        <br />
                        +++Seed Club Collector
                        <br />
                        !!! Airdrop 2 Create onchain and earn points to be eligible for !!! Airdrop 2. More details imminent.
                        <br />
                    </span>
                    <br />
                    <br />
                    <span className="block text-4xl font-bold width-69">
                        <span className="enjoy-accent">!!! Airdrop 2</span>
                        <br />
                        Create onchain and earn points to be eligible for !!! Airdrop 2. More details imminent.
                        <br />
                    </span>
                    <br />
                    <br />
                    <ul className="text-center space-x-4 mt-6 items-center">
                        <a
                            onClick={() => {
                                window.open("https://twitter.com", "_blank");
                            }}
                            className="border-2 p-4 hover:enjoy-hover enjoy-button"
                        >
                            Twitter
                        </a>
                        <a
                            onClick={() => {
                                window.open("https://warpcast.com", "_blank");
                            }}
                            className="border-2 p-4 hover:enjoy-hover enjoy-button"
                        >
                            Warpcast
                        </a>
                    </ul>
                </div>

                <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
                    <span className="block width-33">
                        <span className="enjoy-accent">
                            $Enjoy is not owned, managed or controlled by Zora Labs ("Zora") or any of their respective principals or
                            affiliates. $enjoy tokens are intended as collectible items for individual enjoyment only, not for
                            investment purposes.
                            <br />
                        </span>
                    </span>
                    <br />
                    <br />
                    <img className="flex max-w-xs items-center centered " src="./logo.webp" />

                </div>
                <div className="photos width-85">
                    <img className="" src="./3-dragons.jpg" />
                    <img className="" src="./100-percent-enjoyoor.jpg" />
                    <img className="" src="./coincidence-1.jpg" />
                    <img className="" src="./coincidence-2.jpg" />
                    <img className="" src="./enjoyoor-onchain.jpg" />
                    <img className="" src="./escape-the-matrix.jpg" />
                    <img className="" src="./everybody-gangsta.jpg" />
                    <img className="" src="./fighting-fudders.jpg" />
                    <img className="" src="./fud-or-25.jpg" />
                    <img className="" src="./hello-irs.jpg" />
                    <img className="" src="./tokenfudder.jpg" />
                    <img className="" src="./wario-zorb.jpg" />
                    <img className="" src="./who-up-zorb.jpg" />
                </div>
            </div>
        </>
    );
};

export default Home;
