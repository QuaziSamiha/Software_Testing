import crypto from "crypto";
import { saveTokenToFile } from "./utils/io.js";

function log(message) {
  console.log(message);
}

export function generateToken(logger) {
  const token = crypto.randomBytes(52).toString("hex");

  if (logger) {
    logger(token);
    // console.log(token) //! test will fail
  }

  return token;
}

export async function storeToken(data) {
  if (!data) {
    throw new Error("No token received!");
  }

  await saveTokenToFile(data, "data.txt");
}

// usage
const data = generateToken(log);
storeToken(data);
