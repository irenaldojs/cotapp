import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./telas/Cadastro";
import Login from "./telas/Login";
import NovaSenha from "./telas/NovaSenha";
import RecuperarSenha from "./telas/RecuperarSenha";

const styleLogin =
  "bg-light p-3 col-12 col-sm-3 my-sm-5 d-flex flex-column rounded";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main min-vh-100 d-flex justify-content-center align-itens-center">
        <Routes>
          <Route path="/login" element={<Login style={styleLogin} />} />
          <Route path="/cadastro" element={<Cadastro style={styleLogin} />} />
          <Route
            path="/perdiSenha"
            element={<RecuperarSenha style={styleLogin} />}
          />
          <Route path="/novaSenha" element={<NovaSenha style={styleLogin} />} />
          <Route path="/" element={<Login style={styleLogin} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
