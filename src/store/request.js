import { atom, selector } from "recoil";

export const requestAtom = atom({
  key: "requestAtom",
  default: {
    mailType: "",
    mailTitle: "",
    ismailIUse: "",
    limit: 10,
    currentPage: 1,
  },
});

export const requestSelector = selector({
  key: "requestSelector",
  get: ({ get }) => get(requestAtom),
  set: ({ set, get }, obj) => {
    const prevObj = get(requestAtom);
    const newObj = {
      ...prevObj,
      mailType: obj.mailType,
      mailTitle: obj.mailTitle,
      ismailIUse: obj.ismailIUse,
      limit: obj.limit,
      currentPage: obj.currentPage,
    };

    set(requestAtom, newObj);
  },
});
