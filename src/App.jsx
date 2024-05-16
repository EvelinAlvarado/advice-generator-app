import mobileDivider from "./assets/images/pattern-divider-mobile.svg";
import desktopDivider from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";
import { useState } from "react";

/* Client Service */
const getAdvice = async () => {
  try {
    // Call API
    const response = await fetch(`https://api.adviceslip.com/advice`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching advice: ", error.message);
  }
};

function App() {
  const [slipId, setSlipId] = useState("0");
  const [advice, setAdvice] = useState("Click the dice to get an advice");

  const handleClick = async () => {
    // console.log("Dice was clicked");
    const data = await getAdvice();
    setSlipId(data.slip.id);
    setAdvice(data.slip.advice);
    // console.log(data);
    // console.log(data.slip);
    // console.log(data.slip.id);
    // console.log(data.slip.advice);
  };
  return (
    <>
      <article className="bg-Dark-Grayish-Blue w-[342px] rounded-xl px-[30px] pt-10 pb-16 text-center relative md:w-[540px]">
        <h2 className="text-Neon-Green uppercase mb-6 tracking-[4px] text-xs">
          Advice #<span id="adviceId">{slipId}</span>
        </h2>
        <p
          className="text-Light-Cyan text-[22px] font-extrabold mb-6"
          id="advice"
        >
          "{advice}"
        </p>
        <picture>
          <source media="(max-width:640px)" srcSet={mobileDivider} />
          <source media="(min-width:64px)" srcSet={desktopDivider} />
          {/* Etiquetas <picture> y <source>: Usadas para especificar diferentes versiones de la imagen basadas en condiciones como el tamaño de la pantalla.
          Etiqueta <img> con src: Actúa como una imagen de fallback para navegadores que no soportan <picture> y <source>.
          Importancia: Garantiza que una imagen se mostrará incluso si el navegador no soporta <picture> y <source>. */}
          <img src={desktopDivider} alt="divider" className="mx-auto" />
        </picture>

        <div
          onClick={handleClick}
          className="bg-Neon-Green w-[66px] h-[66px] rounded-full grid  place-content-center absolute bottom-[-33px] left-[138px] cursor-pointer hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)] md:left-[237px] "
        >
          <img src={iconDice} alt="dice" />
        </div>
      </article>

      <footer className="text-Light-Cyan mt-40 text-center gap-1 ">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="text-Neon-Green"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p className="mb-1">
          Coded by{" "}
          <a
            href="#"
            className="hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)] text-Neon-Green"
          >
            Evelin
          </a>
          .
        </p>

        <div className="flex justify-center gap-2 tracking-tight">
          <a
            href="https://github.com/EvelinAlvarado"
            target="_blank"
            className="w-6 hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)]"
          >
            <img src="github.svg" alt="GitHub" className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/evelinalvarado/"
            target="_blank"
            className="w-6 hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)]"
          >
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
