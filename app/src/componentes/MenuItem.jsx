import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function MenuItem({ text, to }) {
  const { setItemSelect, itemSelect } = useContext(UserContext);

  return (
    <div className="w-100 mb-2">
      <Link
        to={to}
        className={`fs-5 w-100 text-light btn ${
          itemSelect === text ? "btn-primary" : "btn-outline-primary border-0"
        }`}
        onClick={() => setItemSelect(text)}
      >
        {text}
      </Link>
    </div>
  );
}

export default MenuItem;
