import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          width={173}
          height={150}
          alt="Finança Logo"
        ></Image>
        <h1>Bem Vindo</h1>

        <p className="mb-3">
          Projeto de Controle de Finanças utilizando React + Next.js
        </p>

        <Button variant="outline">
          Fazer login ou criar uma conta
          <LogInIcon className="mr-2"></LogInIcon>
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
