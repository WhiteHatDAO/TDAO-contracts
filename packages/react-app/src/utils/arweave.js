import Arweave from "arweave";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export async function generateWallet() {
  arweave.wallets.generate().then(key => {
    console.log(key);
    return key;
  });
}

export async function sendTransacton(data, key) {
  let transaction = await arweave.createTransaction(
    {
      data: data,
    },
    key,
  );
  // Examples
  // transaction.addTag("Content-Type", "text/html");
  // transaction.addTag("key2", "value2");
  console.log(transaction);

  return transaction;
}
