export const networks = {
    97: {
        chainId: `0x${Number(97).toString(16)}`, // A 0x-prefixed hexadecimal string
        chainName: "Binance Smart Chain Testnet",
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "tBNB", // 2-6 characters long
            decimals: 18,
        },
        rpcUrls: [
            "https://data-seed-prebsc-1-s1.binance.org:8545",
            "https://data-seed-prebsc-2-s1.binance.org:8545",
            "https://data-seed-prebsc-1-s2.binance.org:8545",
            "https://data-seed-prebsc-2-s2.binance.org:8545",
            "https://data-seed-prebsc-1-s3.binance.org:8545",
            "https://data-seed-prebsc-2-s3.binance.org:8545"
        ],
        blockExplorerUrls: ["https://testnet.bscscan.com"],
    },
    9728: {
        chainId: `0x${Number(9728).toString(16)}`,
        chainName: "Boba BNB Testnet",
        nativeCurrency: {
            name: "Boba BNB Testnet",
            symbol: "BOBA",
            decimals: 18
        },
        rpcUrls: [
            "https://testnet.bnb.boba.network",
            "https://replica.testnet.bnb.boba.network",
            "wss://wss.testnet.bnb.boba.network",
            "wss://replica-wss.testnet.bnb.boba.network"
        ],
        blockExplorerUrls: ["https://blockexplorer.testnet.bnb.boba.network"]
    },
    43113: {
        chainId: `0x${Number(43113).toString(16)}`,
        chainName: "Avalanche Fuji Testnet",
        nativeCurrency: {
            name: "AVAX Testnet",
            symbol: "AVAX",
            decimals: 18
        },
        rpcUrls: [
            "https://api.avax-test.network/ext/bc/C/rpc",
            "https://rpc.ankr.com/avalanche_fuji",,
            "https://rpc.ankr.com/avalanche_fuji-c",
            "https://avalanchetestapi.terminet.io/ext/bc/C/rpc",
            "https://endpoints.omniatech.io/v1/avax/fuji/public",
            "wss://replica-wss.testnet.bnb.boba.network"
        ],
        blockExplorerUrls: ["https://testnet.snowtrace.io"]
    },
    56: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
        },
        rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
        ],
        blockExplorerUrls: ["https://bscscan.com"]
    },
    11155111: {
        chainId: `0x${Number(11155111).toString(16)}`,
        chainName: "Sepolia Testnet",
        nativeCurrency: {
            name: "ETH Testnet",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: [
            "https://rpc.sepolia.org",
            "https://rpc2.sepolia.org",,
            "https://rpc-sepolia.rockx.com",
            "https://eth-sepolia.public.blastapi.io",
            "https://eth-sepolia-public.unifra.io"
        ],
        blockExplorerUrls: ["https://sepolia.etherscan.io/"]
    },
    
};


 