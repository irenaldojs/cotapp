import { useState } from "react";
import { FormControl } from "react-bootstrap";
import ArrowBack from "../../componentes/ArrowBack";
import ErrorMsg from "../../componentes/ErrorMsg";

function RecuperarSenha(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  function handleRecoverIn() {
    setEmailError(false);

    const validateEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    ).test(email);

    if (!validateEmail) {
      setEmailError("Email inválido");
      console.log(emailError);
    }
  }

  return (
    <div className={props.style}>
      <div>
        <ArrowBack />
      </div>
      <br />
      <header className="header text-center">
        <h1>Recuperar senha</h1>
        <h5>Se perdeu ou esqueceu a senha da conta, preencha o formulário</h5>
        <br />
      </header>
      <form className="mb-4">
        <ErrorMsg mensagem={emailError} />
        <FormControl
          type="email"
          name="email"
          id="email"
          placeholder="Digite o email da sua conta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={emailError}
        />
      </form>
      <div>
        <div className="d-flex">
          <button
            className="btn btn-success w-100 m-0 fs-5"
            onClick={handleRecoverIn}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecuperarSenha;
