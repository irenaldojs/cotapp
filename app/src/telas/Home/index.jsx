import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import MenuItem from "../../componentes/MenuItem";
import UserContext from "../../context/UserContext";

function Home() {
  const { login } = useContext(UserContext);

  const itensMenu = [
    <MenuItem text="Home" to="/" />,
    <MenuItem text="Enviadas" to="/enviadas" />,
    <MenuItem text="Recebidas" to="/recebidas" />,
  ];

  return (
    <div className="d-flex flex-row w-100">
      <div className="p-1 text-white col-2 border-end border-2 border-secondary">
        <h4 className="p-2 text-center">Logo</h4>
        <br />
        {itensMenu.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <div className="p-2 bg-primary-subtle w-100">
        <Outlet />
      </div>
      {!login && <Navigate to="/login" />}
    </div>
  );
}

export default Home;
