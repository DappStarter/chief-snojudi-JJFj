require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strong rescue sad exchange good end army gentle'; 
let testAccounts = [
"0x611c3f1d9ed8e13228a7764b8edb656ecd810efce0f52aa6a0e72eda653ee794",
"0x7b4eaf2243cd5834e10aa07fdca7d2a3f232d6ba96a983526a749bafee539676",
"0xfdc7e576655c014df7158e1c1238ac66f8123b1d9c33baaf080ede61ae4f6c0f",
"0xf21b555869f82204260d998215d6f72633aad41adf1de12f9c12ca45674cbb79",
"0x75ba9adffa7c883cbcb86a43e88729f1489dcf8fb9887290a73773a0cb8ae86f",
"0x54d3a5837fad264c23ed53c4e642ba4aa3e7c511f703471b0bc3922c6d387380",
"0x28e42a58bda2e1d20f1a968cf21ac4e73a85a24210933125c0a274fa3d6394c0",
"0xb615e9b2c37babe1c50739eaee6b1c9730116baba77bf59e3ce14c052e4982f7",
"0xdf030d525f8605e980d1ced1e692c4e5842c5b3ea52d22265a45fb45a4ae735a",
"0x0ad4d5dc2da97c3b44eaeb4546416af18fc2e9b1b136316bb388a066e3adb74b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

