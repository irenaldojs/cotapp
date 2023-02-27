import { useContext, useState } from "react";
import { FormControl } from "react-bootstrap";
import ArrowBack from "../../componentes/ArrowBack";
import ErrorMsg from "../../componentes/ErrorMsg";
import { validateEmail, validatePassword } from "../../utilidades/texteRegex";
import axios from "axios";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import ModalLoading from "../../componentes/ModalLoading";

function Cadastro({ className }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState(null);
  const [swap, setSwap] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const [userError, setUserError] = useState("");

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
      fetchData();
      return;
    }

    //signInWithEmailAndPassword(email, password);
  }

  const fetchData = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:5000/users", {
        email: email,
        password: password,
      })
      .then(() => {
        setUser({
          email: email,
          password: password,
        });
        setSwap(true);
      })
      .catch((error) => {
        setUserError(`Sem responsta ` + error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={className}>
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
        <ErrorMsg mensagem={userError} />
        <button
          className="btn btn-success w-100 m-0 fs-5"
          onClick={handleSignIn}
        >
          Cadastre-se
        </button>
        {swap && <Navigate to="/login" />}
        <ModalLoading open={loading} />
      </div>
    </div>
  );
}

export default Cadastro;
