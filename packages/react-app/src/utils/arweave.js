import Arweave from "arweave";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export async function generateWallet() {
  await arweave.wallets.generate().then(arJWK => {
    console.log("arJWK:", arJWK);
    return arJWK;
  });
}

export async function sendTransacton(data, arJWK) {
  // console.log(arJWK);
  let transaction = await arweave.createTransaction(
    {
      data: data,
    },
    arJWK,
  );
  // Examples
  // transaction.addTag("Content-Type", "text/html");
  transaction.addTag("key2", "value2");
  console.log(transaction);

  await arweave.transactions.sign(transaction, arJWK);

  //   let uploader = await arweave.transactions.getUploader(transaction);

  //   while (!uploader.isComplete) {
  //     await uploader.uploadChunk();
  //     console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
  //   }

  return transaction;
}
