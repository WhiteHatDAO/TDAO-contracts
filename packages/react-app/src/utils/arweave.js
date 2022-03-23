import Arweave from "arweave";
import { arJWK } from "./../RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4.js";
// Wallet for testing
// RBDknevaThx7OS6TSULo00kYTADbA0gL12PamuBuLM4

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
  let transaction = await arweave.createTransaction(
    {
      data: data,
    },
    arJWK,
  );
  // Examples
  transaction.addTag("Content-Type", `${contentType}`);
  transaction.addTag("Categoryo-1", `${categories[0] && categories[0]}`);
  console.log(transaction);

  await arweave.transactions.sign(transaction, arJWK);

  let uploader = await arweave.transactions.getUploader(transaction);

  while (!uploader.isComplete) {
    await uploader.uploadChunk();
    console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
  }

  return transaction;
}

export async function getFileBase64(txId) {
  // Get the base64url encoded string
  arweave.transactions.getData(txId).then(data => {
    console.log(data);
  });
}

export async function getFileAsAString(txId) {
  // Get the data decode as string data
  arweave.transactions.getData(txId, { decode: true, string: true }).then(data => {
    console.log(data);
  });
}

export async function DecodeTags(txId) {
  const transaction = arweave.transactions.get(txId).then(transaction => {
    transaction.get("tags").forEach(tag => {
      let key = tag.get("name", { decode: true, string: true });
      let value = tag.get("value", { decode: true, string: true });
      console.log(`${key} : ${value}`);
    });
    // Content-Type : text/html
    // User-Agent : ArweaveDeploy/1.1.0
  });
}

// id here is just one string tx id
// export const GRAPH_GET_TX_BY_ID = id => {
//   transactions(ids: [id]) {
//       edges {
//           node {
//               id
//           }
//       }
//   }
// }

// ids is an array here of strings
// export const GRAPH_GET_TX_BY_IDS = ids => {
//   transactions(ids: ids) {
//       edges {
//           node {
//               id
//           }
//       }
//   }
// }

/**
 * 
 * @dev tag example to use for search
 *  {{
        name: "Content-Type",
        values: ["text/html"]
    }} tags 
 */
// export const GRAPH_GET_TX_BY_TAG = tag => {
//   query {
//     transactions(
//         tags: tags
//     ) {
//         edges {
//             node {
//                 id
//             }
//         }
//     }
//   }
// }