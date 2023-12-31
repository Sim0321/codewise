import { atom, selector } from "recoil";

export const searchStatusAtom = atom({
  key: "searchStatusAtom",
  default: false,
});

export const searchStatusSelector = selector({
  key: "searchStatusSelector",
  get: ({ get }) => get(searchStatusAtom),
  set: ({ set }, boolean) => set(searchStatusAtom, boolean),
});
