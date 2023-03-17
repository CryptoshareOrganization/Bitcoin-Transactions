## Bitcoin Fruit Shop

This guide outlines how to use the Bitcoin Fruit Shop app.

The app features a backend and a front-end.

#Front-end
The front-end serves as the interface to send user requests to the backend. Its made with Rreact and hosted on Github pages.

To purchase a fruit and pay with Bitcoin. Follow the following steps:
1. Go to the apps website: https://cryptoshareorganization.github.io/Bitcoin-Transactions/
2. Choose the type of fruit.
3. Select the quantity of fruits
4. Click on the buy button and wait for the TransactionId to appear.
5. Copy the transaction Id and paste it on the https://blockexplorer.one/.
6. Wait for the transaction to be confirmed before making another purchase.


![btctransaction](https://user-images.githubusercontent.com/127881609/225971119-82b8638c-b851-45f4-bfdc-b0dfe44e9e20.jpg)

#Backend
The Bitcoin Fruit Shop backend is hosted on Render and serves purchase requests sent by users via the front-end. On the front-end, once the user chooses the type of fruit and quantity and clicks the Buy Fruit button, the fruit type and quantity is sent to the server. The servers builds the transaction and sends funds to the respective fruit wallet. Once the transaction is built and broadcasted to the blockchain, a transactionId is returned to the front-end for the user to copy and  and paste into the blockexplorer.

Note:
On clicking the Buy Fruit button, wait to receive the transactionId. It may take a few seconds as the request has to be sent to the server and th server has to respond with a transaction ID.
