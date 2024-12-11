import { genSaltSync, hashSync } from "bcrypt";

export const hashPassword = (plainText: string): string => {
  const salt = genSaltSync(10);
  const hashed = hashSync(plainText, salt);

  return hashed;
};
