import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import { useDispatch, useSelector } from "react-redux";
import { LENGUAGE } from "../../redux/actions";

export default function Lenguage() {
  const lenguage = useSelector((state) => state.lenguage);
  const dispatch = useDispatch();

  const handleChangeLenguage = () => {
    dispatch({ type: LENGUAGE, payload: !lenguage });
  };

  return (
    <div
      onClick={handleChangeLenguage}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        marginRight: "1em",
      }}
    >
      <LanguageIcon style={{ color: "black" }} />
      <p>{lenguage ? "English" : "Español"}</p>
    </div>
  );
}
