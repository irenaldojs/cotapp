import { useState } from "react";
import { FormControl } from "react-bootstrap";
import ArrowBack from "../../componentes/ArrowBack";
import ErrorMsg from "../../componentes/ErrorMsg";
import { validateEmail, validatePassword } from "../../utilidades/texteRegex";

function Cadastro(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState(null);

  function handleSignIn(e) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setRepeatPasswordError(false);

    // Validação de email
    const validateEmailTest = validateEmail.test(email);
    if (!validateEmailTest) {
      setEmailError("Email inválido");
    }

    // Validação da senha
    const validatePasswordTest = validatePassword.test(password);
    if (!validatePasswordTest) {
      setPasswordError("Senha fraca");
    }

    // Validação da repetição da senha
    const validateRepeatPassword = repeatPassword === password;

    if (!validateRepeatPassword) {
      setRepeatPasswordError("Repita a senha");
    }

    const validate =
      validateEmailTest && validatePasswordTest && validateRepeatPassword;

    if (validate) {
      console.log("valido");
      return;
    }

    //signInWithEmailAndPassword(email, password);
  }
  return (
    <div className={props.style}>
      <div>
        <ArrowBack />
      </div>
      <br />
      <header className="header text-center">
        <h1>Cadastre-se</h1>
        <h4>É rapido e fácil.</h4>
      </header>

      <form className="py-5">
        <ErrorMsg mensagem={emailError} />
        <FormControl
          type="email"
          className="mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={emailError}
        />
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

      <div>
        <button
          className="btn btn-success w-100 m-0 fs-5"
          onClick={handleSignIn}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
