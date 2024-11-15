import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
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

        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2"></LogInIcon>
            Fazer login ou criar uma conta
          </Button>
        </SignInButton>
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
