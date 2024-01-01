import { atom, selector } from "recoil";

export const readDetailAtom = atom({
  key: "readDetailAtom",
  default: {
    mailUid: "",
    mailType: "",
    mailTitle: "",
    ismailIUse: "",
    modificationDate: "",
    mailContent: "",
    reason: "",
  },
});

export const readDetailSelector = selector({
  key: "readDetailSelector",
  get: ({ get }) => get(readDetailAtom),
  set: ({ set }, obj) => {
    set(readDetailAtom, {
      mailUid: obj.mailUid,
      mailType: obj.mailType,
      mailTitle: obj.mailTitle,
      ismailIUse: obj.ismailIUse,
      modificationDate: obj.modificationDate,
      mailContent: obj.mailContent,
      reason: obj.reason,
    });
  },
});
