const CryptoJS = require("crypto-js");

const key = "7YpNha&nM0Ou";
export function Encrypt (toEncrypt:string) {
  return CryptoJS.AES.encrypt(toEncrypt, key).toString();
}
export function Decrypt (crypted:string) {
  const state = CryptoJS.AES.decrypt(crypted, key);
  return state.toString(CryptoJS.enc.Utf8);
}