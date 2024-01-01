import * as S from "./CheckBox.style";
import { ReactComponent as Checked } from "../../../assets/icon/checked.svg";

const CheckBox = ({ checked, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <S.Label checked={checked}>
      <S.Input
        type="checkbox"
        className="checkbox"
        onChange={handleCheckboxChange}
        checked={checked}
      />
      {checked && <Checked className="checked-icon" />}
    </S.Label>
  );
};

export default CheckBox;
