import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { RegisterCelebrityForm } from "./components/RegisterCelebrityForm";
import { RegisterCompanyForm } from "./components/RegisterCompanyForm";

type RegisterFormPageProps = {
  onGoBack: () => void;
  usuario: {
    email: string;
    password: string;
  };
};

const SectionsEnum = {
  celebrity: "celebrity",
  company: "company",
};

export function RegisterFormPage(props: RegisterFormPageProps) {
  const [tab, setTab] = useState(SectionsEnum.celebrity);

  const title = tab === SectionsEnum.celebrity ? "REGISTRA TU CUENTA" : "REGISTRA A TU EMPRESA";
  return (
    <div className="flex min-h-screen flex-col bg-primary pb-8">
      <div className="flex h-1/5 flex-col justify-between rounded-b-[40px] bg-background">
        <button
          className="-ml-4 -mt-4 grid min-h-24 w-24 place-items-center rounded-full bg-primary/80"
          onClick={props.onGoBack}
        >
          <IoIosRefresh className="scale-x-[-1] text-5xl text-primary" />
        </button>
        <div className="flex flex-col text-4xl font-medium">
          <h1 className="mb-6 text-center text-primary/80">{title} </h1>
        </div>
      </div>

      <div className="flex h-full flex-col px-6">
        <div className="mt-6 flex rounded-[30px] bg-white px-2 py-1 font-medium">
          <button
            className={`${tab === SectionsEnum.celebrity ? "bg-secondary text-secondary-foreground" : ""} w-full rounded-[30px] py-4 transition-colors`}
            onClick={() => setTab(SectionsEnum.celebrity)}
          >
            INFLUENCER
          </button>
          <button
            className={`${tab === SectionsEnum.company ? "bg-secondary text-secondary-foreground" : ""} w-full rounded-[30px] py-4 transition-colors`}
            onClick={() => setTab(SectionsEnum.company)}
          >
            EMPRESA
          </button>
        </div>

        {tab === SectionsEnum.celebrity && (
          <RegisterCelebrityForm usuario={props.usuario} />
        )}
        {tab === SectionsEnum.company && (
          <RegisterCompanyForm usuario={props.usuario} />
        )}
      </div>
    </div>
  );
}
