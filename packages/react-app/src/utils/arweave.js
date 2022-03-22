import Arweave from "arweave";

// codecookerpro commented BEGIN
// import { arJWK } from "./../RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4.js";
// codecookerpro commented END

// Wallet for testing
// RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4
// process.env.ARWEAVE_WALLET_KEY || {}

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export async function getWalletAddress(arJWL) {
  const walletAddress = await arweave.wallets.jwkToAddress(arJWL);

  return walletAddress;
}

export async function getTransactionOwner(transaction) {
  const ownerAddress = await arweave.wallets.ownerToAddress(transaction.owner);

  return ownerAddress;
}

// Send transaction for upload and mining
// @params data the file data
// @params contentType the file type, txt, docx, pdf, etc.
export async function sendTransacton(data, contentType, categories) {
  // console.log(arJWK);

  // codecooker commented BEGIN

  // let transaction = await arweave.createTransaction(
  //   {
  //     data: data,
  //   },
  //   arJWK,
  // );
  // // Examples
  // transaction.addTag("Content-Type", `${contentType}`);
  // transaction.addTag("key2", "value2");
  // console.log(transaction);

  // await arweave.transactions.sign(transaction, arJWK);

  // let uploader = await arweave.transactions.getUploader(transaction);

  // while (!uploader.isComplete) {
  //   await uploader.uploadChunk();
  //   console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
  // }

  // return transaction;

  // codecooker commented END
}

export async function getTransaction(transactionId) {}
