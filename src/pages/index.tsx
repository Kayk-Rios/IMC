
import CalcImc from "./calcimc/CalcImc";


export default function Home() {
  return (
    <div className="flex flex-col w-full  justify-start items-center h-screen ">
    <h1 className="text-2xl font-bold">Bem-vindo ao IMC Calculator</h1>
      <CalcImc/>
    </div>
  );
}
