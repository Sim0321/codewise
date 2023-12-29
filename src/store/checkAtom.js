import { atom, selector } from "recoil";

// export const allCheckAtom = atom({
//   key: "allCheckAtom",
//   default: false,
// });

// export const allCheckSelector = selector({
//   key: "allCheckSelector",
//   get: ({ get }) => get(allCheckAtom),
//   set: ({ set }, boolean) => set(allCheckAtom, boolean),
// });

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
