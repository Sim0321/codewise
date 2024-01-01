import { atom, selector } from "recoil";

export const checkListAtom = atom({
  key: "checkListAtom",
  default: [],
});

export const checkListSelector = selector({
  key: "checkListSelector",
  get: ({ get }) => get(checkListAtom),
  set: ({ set }, indexArray) => {
    set(checkListAtom, indexArray);
  },
});
