import { atom, selector } from "recoil";

export const purposeAtome = atom({
  key: "purposeAtome",
  default: "default",
});

export const purposeSelector = selector({
  key: "purposeSelector",
  get: ({ get }) => get(purposeAtome),
  set: ({ set }, newPurpose) => set(purposeAtome, newPurpose),
});
