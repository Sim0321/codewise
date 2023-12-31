import * as S from "./CheckBox.style";
import { ReactComponent as Checked } from "../../../assets/icon/checked.svg";
import { useSetRecoilState } from "recoil";
import { purposeSelector } from "../../../store/purposeAtome";

const CheckBox = ({ checked, onChange }) => {
  const handleCheckboxChange = (e) => {
    // e.stopPropagation();
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
