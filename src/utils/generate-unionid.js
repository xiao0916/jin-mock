// import { customAlphabet } from "nanoid";
// const nanoid = customAlphabet("1234567890abcdef", 10);

export default function generateUnionid(size = 10) {
  return Math.random().toString(36).slice(-size);
  // return nanoid(size);
}
