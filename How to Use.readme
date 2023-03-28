# Bitcoin Project Backend

This is the backend for the Bitcoin Transactions Project.

To run the project, follow the following steps:
1. Create a folder for the project in vscode.
2. Git clone the project.
3. Run NPM INSTALL to install the dependencies.
4. Run nodemon on the terminal to start the localhost server.

## Backend Expanation - How it works

The main code is contained in the index.js file. The file contains an api endpoint called generate that takes a fruit_type and quantity as a response. These values are needed to process the fruit purchase with Bitcoin. To start the transaction, the code checks whether there is a pending transaction yet to be confrimed. If there is, the code returns a response with the message, "Another transaction is still in progress". If no pending transation is available, the code starts executing the transaction. 

The code uses the bitcore-lib library to prepare transactions for boradcasting. Tatum api and cryptoapis are used to fetch the data needed for building the transaction and broadcasting the transaction.

The steps included in the code include:

Generating a testnet wallet address.
1. Fetching unspent transaction outputs (UTXO) of the source address.
2. Preparing the UTXO.
3. Setting the UTXO as input.
4. Setting the receiving and the amount to be sent to the receiving address.
5. Setting the transaction fees.
6. Signing the transaction.
7. Broadcasting the signed transaction to be included into a block in the Bitcoin Testnet.

## The Goal
The goal of this project is to process purchase transactions with Bitcoin and store the purchase details on-chain. To achieve this, after processing the transaction, the next step is to encode the transaction details in a blockchain transaction. Inside the subsequent.js file, there is code for encoding text on the blockchain. The function takes a fruit_type and number to be encoded on chain. The code works when trying to encode random text but the challenge is to encode purchase details on chain.
In order to succesfully encode purchase transaction details, it may help to take not that:
1. The purchase transaction and subsequent encoding transaction are processed from the same wallet.
2. After the purchase transaction is built and broadcasted to the testnet, it may take up to 20 minutes for the transaction to be confirmed.
3. New transactions should be started only after all pending transactions on the wallet are confirmed. This means that the subsequent transaction should only commence after the purchase transaction is confirmed.
