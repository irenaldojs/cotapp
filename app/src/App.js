import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./telas/Cadastro";
import Login from "./telas/Login";
import NovaSenha from "./telas/NovaSenha";
import RecuperarSenha from "./telas/RecuperarSenha";
import UserContext from "./context/UserContext";
import { useState } from "react";
import Home from "./telas/Home";
import Enviadas from "./telas/Enviadas";
import Recebidas from "./telas/Recebidas";

const className =
  "bg-light p-3 col-12 col-sm-6 col-md-5 col-lg-4 col-xxl-3 my-sm-5 d-flex flex-column rounded";

function App() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [itemSelect, setItemSelect] = useState("home");

  return (
    <UserContext.Provider
      value={{ user, setUser, itemSelect, setItemSelect, login, setLogin }}
    >
      <BrowserRouter>
        <div className="bg-main min-vh-100 d-flex justify-content-center align-itens-center">
          <Routes>
            <Route path="/login" element={<Login className={className} />} />
            <Route
              path="/cadastro"
              element={<Cadastro className={className} />}
            />
            <Route
              path="/perdiSenha"
              element={<RecuperarSenha className={className} />}
            />
            <Route
              path="/novaSenha"
              element={<NovaSenha className={className} />}
            />

            <Route path="/" element={<Home />}>
              <Route path="enviadas" element={<Enviadas />} />
              <Route path="recebidas" element={<Recebidas />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
