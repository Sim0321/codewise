import { atom, selector } from "recoil";

// limit
export const limitAtom = atom({
  key: "limitAtom",
  default: 10,
});

export const limitSelector = selector({
  key: "limitSelector",
  get: ({ get }) => get(limitAtom),
  set: ({ set }, newLimitValue) => set(limitAtom, newLimitValue),
});

// page
export const pageAtom = atom({
  key: "pageAtom",
  default: 1,
});

export const pageSelector = selector({
  key: "pageSelecotr",
  get: ({ get }) => get(pageAtom),
  set: ({ set }, newPage) => set(pageAtom, newPage),
});

// export const requestAtom = atom({
//   key: "requestAtom",
//   default: {
//     limit: 0,
//     page: 1,
//   },
// });

// export const requestSelector = atom({
//   key: "requestSelector",
//   get: ({ get }) => {
//     get(requestAtom);

//     // const limit = get(limitSelector);
//     // const page = get(pageSelector);
//   },
// });
