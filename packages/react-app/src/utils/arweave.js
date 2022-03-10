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
  let transactionA = await arweave.createTransaction(
    {
      data: data,
    },
    key,
  );
}
