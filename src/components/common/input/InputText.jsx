import * as S from "./InputText.style";

const InputText = ({ id, name, placeholder, value, ...rest }) => {
  return (
    <S.Input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default InputText;
