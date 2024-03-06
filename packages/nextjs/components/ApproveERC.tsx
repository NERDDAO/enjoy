import * as React from 'react'
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
    erc20ABI,
    useAccount,
} from 'wagmi'

export default function ApproveErc() {
    const { config } = usePrepareContractWrite({
        address: '0x7B04236EB1f36e1dcE64d5411ffB8da9FbF271F0',
        abi: erc20ABI,
        functionName: 'approve',
        args: ["0x931CA75C7235D36dB2497b52EA1660268d37e8d6", BigInt(100)],
    })
    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <div>
            <button className="cursor-pointer" disabled={!write || isLoading} onClick={() => write()}>
                {isLoading ? 'Approving...' : 'Approve'}
            </button>
            {isSuccess && (
                <div>
                    TokensApproved
                    <div>
                        <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                    </div>
                </div>
            )}
        </div>
    )
}

