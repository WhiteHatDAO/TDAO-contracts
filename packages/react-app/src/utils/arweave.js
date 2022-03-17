import Arweave from "arweave";
import { arJWK } from "./../RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4.js";
// Wallet for testing
// RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4
// process.env.ARWEAVE_WALLET_KEY || {}

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

// export async function generateWallet() {
//   let arJWK;
//   await arweave.wallets.generate().then(a => {
//     // console.log("arJWK:", arJWK);
//     arJWK = a;
//   });
//   return arJWK;
// }

export async function getWalletAddress(arJWL) {
  const walletAddress = await arweave.wallets.jwkToAddress(arJWL);

  return walletAddress;
}

export async function getTransactionOwner(transaction) {
  const ownerAddress = await arweave.wallets.ownerToAddress(transaction.owner);

  return ownerAddress;
}

export async function sendTransacton(data, contentType) {
  // console.log(arJWK);
  let transaction = await arweave.createTransaction(
    {
      data: data,
    },
    arJWK,
  );
  // Examples
  transaction.addTag("Content-Type", `${contentType}`);
  transaction.addTag("key2", "value2");
  console.log(transaction);

  await arweave.transactions.sign(transaction, arJWK);

  let uploader = await arweave.transactions.getUploader(transaction);

  while (!uploader.isComplete) {
    await uploader.uploadChunk();
    console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
  }

  return transaction;
}

export async function getTransaction(transactionId) {}
