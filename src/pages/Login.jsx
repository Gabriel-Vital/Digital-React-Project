import ImageLogin from "../assets/Mobile wireframe-cuate.svg";
import Button from "../components/formulario/Button";
import Header from "../components/formulario/Header";
import { useNavigate } from "react-router-dom";
import Userinformation from "../components/formulario/Userinformation";

function LoginPage() {
  let navigate = useNavigate();
  function handleSubmit() {
    navigate("/transactions");
  }
  return (
    // container
    <main className="w-full h-svh flex bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-400">
      {/* Esquerda */}
      <aside className="w-[50%] h-svh flex flex-col items-center justify-center gap-2">
        <img
          className="max-w-[450px]"
          src={ImageLogin}
          alt="Ilustrative login image"
        />
        <h1 className="text-white text-3xl font-bold">Secure Login Portal</h1>
        <p className="text-white text-center">
          Acess your dashborad securely eith our protect login <br /> system.
          Your data is encrypted and secure.
        </p>
      </aside>
      {/* Direita */}
      <aside className="w-[50%] h-svh p-6 flex justify-center items-center rounded-l-4xl bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* container do formulário */}
          <form className="flex flex-col justify-center items-center w-full max-w-md gap-3">
            {/* topo */}
            <Header />
            {/* meio */}
            <main className="w-full">
              <Userinformation />
              {/* botão */}
              <Button onClick={handleSubmit} />
            </main>
            {/* fim */}
          </form>
        </div>
      </aside>
    </main>
  );
}

export default LoginPage;
