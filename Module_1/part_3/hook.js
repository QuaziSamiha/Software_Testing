import CryptoJS from "crypto-js";

// * Callback-based encryption

export function encryptMessage(message, key, callback) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

//  * Promise-based encryption

export function encryptMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}

// const message = {
//   name: 'puku',
//   password: "11223344",
// };

// const secretKey = "ghamCLADS105";

// // Callback-based encryption
// encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//   console.log(encryptedMessage);
// });

// // Promise-based encryption
// encryptMessagePromise(JSON.stringify(message), secretKey).then(
//   (encryptedMessage) => {
//     console.log(encryptedMessage);
//   }
// );
