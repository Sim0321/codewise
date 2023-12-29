const useEmail = (boolean) => {
  if (!boolean) {
    return null;
  }

  if (boolean === "Y") {
    return "사용";
  } else {
    return "미사용";
  }
};

export default useEmail;
// Y,N을 사용,미사용으로 반환하는 훅
