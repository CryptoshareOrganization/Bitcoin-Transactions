# This is a Bitcoin Payment Model.

The code is for a fruit shop model where a user can buy a fruit and choose the quantity and then pay with Bitcoin.

The code teaches how to construct a bitcoin transaction by simulation a real bitcoin transaction on the testnet.

The code uses the bitcore-lib library to prepare transactions for boradcasting. Tatum api and cryptoapis are used to fetch the data needed for building the transaction and broadcasting the transaction.

The steps included in the code include:
1. Generating a testnet wallet address.
2. Fetching unspent transaction outputs (UTXO) of the source address.
3. Preparing the UTXO.
4. Setting the UTXO as input.
5. Setting the receiving and the amount to be sent to the receiving address.
6. Setting the transaction fees.
7. Signing the transaction.
8. Broadcasting the signed transaction to be included into a block in the Bitcoin Testnet.

## Challenges when working on the code:
1. Finding an api with the right inputs required by bitcore-lib to build a transaction.
2. The Bitcoin testnet is quite slow to confirm transactions.
3. Tested out other libraries before trying out Bitcore-lib. Turns out most are depreciated.








