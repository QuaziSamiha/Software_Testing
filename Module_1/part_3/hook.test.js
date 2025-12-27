import { it, expect, beforeAll, afterAll, afterEach, beforeEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./hook.js";
import CryptoJS from "crypto-js";

beforeAll(() => {
  console.log("before all");
});

afterAll(() => {
  console.log("after all");
});

afterEach(() => {
  console.log("after each");
});

beforeEach(() => {
  console.log("before each");
});

it("should encrypt a message", async () => {
  const message = "Programming Hero";
  const secretKey = "458965";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (message) => {
      resolve(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should also just pass", async () => {
  const message = "Programming Hero";
  const secretKey = "458965";
  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

import { it, expect } from "vitest";

it("should encrypt the message correctly", async () => {
  const message = "hello world";
  const key = "secret";

  // Encrypt the message
  const encryptedMessage = await encryptMessagePromise(message, key);
  expect(encryptedMessage).toBeDefined();

  // Decrypt to verify
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(
    CryptoJS.enc.Utf8
  );
  expect(decryptedMessage).toBe(message);
});
