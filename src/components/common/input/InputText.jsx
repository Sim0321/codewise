import * as S from "./InputText.style";

const InputText = ({ type, id, name, placeholder, value, ...rest }) => {
  return (
    <S.Input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default InputText;
