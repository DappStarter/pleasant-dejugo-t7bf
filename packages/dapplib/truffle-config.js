require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain million heavy private swift genre'; 
let testAccounts = [
"0x3a5cb075307fca7360e5f520050f8768beaddbfdef6b8f130bde198d0cc4cdd8",
"0x7b2cc68c6004172a600734141e4b685c2d9bf4c60ab10fcb4e9ae0736b36d6c2",
"0x71df75cd82ea5c061f876d954a310bb90d2e170048664945f2a8c8a9eac7efac",
"0x7b620760bdafbf8cb43b1dc43f09c27649f07e8f47bb4be6b904a41e79d35f89",
"0x4e3e06614bbbc50576bceecee1791b4f6497b661364027835b1e863bc5de5fb8",
"0x74f1ad4f0dfebe87b5d3e66075e0f59c946233896f231233b1f11d0e0b6416b1",
"0xa43ced4efc22b28e983090155d66537d6b71662e56860f0fef5eeb630d5a1afb",
"0xdf867baa5df46eeba439dc3d1ac2fb81aeef32e60c550facd07cf85b439c0a9f",
"0x4695cb0bc7b709f256559dacf5dd1b11a98e4b2371651f81322cf52fb966d8e6",
"0x5b4c32a0b172c4c9f0c4d848ccde0fe64603e2bddde2b0567bead4499918179f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

