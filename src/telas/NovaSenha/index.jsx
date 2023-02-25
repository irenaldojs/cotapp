import { useState } from "react";
import ErrorMsg from "../../componentes/ErrorMsg";
import { FormControl } from "react-bootstrap";
import ArrowBack from "../../componentes/ArrowBack";

export function NovaSenha(props) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  return (
    <div className={props.style}>
      <div>
        <ArrowBack />
      </div>
      <br />
      <div>
        <header className="header text-center">
          <h1 className="fw-bold">Nova senha</h1>
          <h5>Escolha uma nova senha, diferente da anterior</h5>
          <br />
        </header>
      </div>

      <form>
        <ErrorMsg mensagem={passwordError} />
        <FormControl
          type="password"
          className="mb-2"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={passwordError}
        />
        <ErrorMsg mensagem={repeatPasswordError} />
        <FormControl
          type="password"
          className="mb-2"
          placeholder="Confirme a senha"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          isInvalid={repeatPasswordError}
        />
      </form>
    </div>
  );
}

export default NovaSenha;
