const useDateFormat = (date) => {
  if (!date) {
    return null;
  }

  const ymd = date.split("T")[0];
  const hour = date.split("T")[1].split(":")[0];
  const min = date.split("T")[1].split(":")[1];

  const newFormat = `${ymd} ${hour}:${min}`;
  return newFormat;
};

export default useDateFormat;

// 수정일 Date Format 훅
