import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import ErrorMsg from "../../componentes/ErrorMsg";
import ModalLoading from "../../componentes/ModalLoading";
import UserContext from "../../context/UserContext";
import { validateEmail, validatePassword } from "../../utilidades/texteRegex";

//import { useAuthState } from "react-firebase-hooks/auth";
//import firebase from "firebase";
// import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";

function Login({ className }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const [userError, setUserError] = useState("");
  const { user, setUser, login, setLogin } = useContext(UserContext);

  useEffect(() => {
    setEmail(user.email);
    setPassword(user.password);
  }, [user, login]);

  function handleLoginIn(e) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    // validar email
    const validateEmailTest = validateEmail.test(email);
    if (!validateEmailTest) {
      setEmailError("Email inválido");
    }

    // validar senha
    const validatePasswordTest = validatePassword.test(password);
    if (!validatePasswordTest) {
      setPasswordError("Senha inválida");
    }

    if (validateEmailTest && validatePasswordTest) {
      fetchData();
    }
    //signInWithEmailAndPassword(email, password);
  }

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length === 0) {
          setUserError("Email/senha inválidos");
          setLogin(false);
        } else {
          console.log(res.data);
          setUserError("");
          setUser({
            email: email,
            password: password,
          });
          setLogin(true);
        }
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
      <br height="36px" />
      <br />
      <header className="header text-center">
        <h1 className="fw-bold">Login</h1>
        <br />
      </header>
      <br />
      <br />
      <form>
        <div className="mb-3">
          <ErrorMsg mensagem={emailError} />
          <InputGroup>
            <InputGroup.Text id="input-group-email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-at"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
            </InputGroup.Text>
            <FormControl
              className="p-2"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Input group email"
              aria-describedby="input-group-email"
              isInvalid={emailError}
            />
          </InputGroup>
        </div>

        <div className="mb-5">
          <ErrorMsg mensagem={passwordError} />
          <InputGroup>
            <InputGroup.Text id="input-group-password">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-key"
                viewBox="0 0 16 16"
              >
                s
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </InputGroup.Text>
            <FormControl
              className="p-2"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Input group password"
              aria-describedby="input-group-password"
              isInvalid={passwordError}
            />
          </InputGroup>
          <div className="d-flex justify-content-end align-items-start">
            <Link to="/perdiSenha">Esqueceu a senha ?</Link>
          </div>
        </div>

        <div>
          <ErrorMsg mensagem={userError} />
          <div className="d-flex">
            <button
              className="btn btn-success w-100 m-0 fs-5"
              onClick={handleLoginIn}
            >
              Entrar
            </button>
          </div>
        </div>

        <div className="d-flex mt-3 justify-content-end">
          <p className="me-1">Você não tem uma conta?</p>
          <Link to="/cadastro">Crie a sua conta aqui</Link>
        </div>
      </form>
      {login && <Navigate to="/" />}
      <ModalLoading open={loading} />
    </div>
  );
}

export default Login;
