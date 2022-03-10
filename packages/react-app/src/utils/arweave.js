import Arweave from "arweave";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export async function generateWallet() {
  arweave.wallets.generate().then(k => {
    console.log(k);
    return k;
  });
}
