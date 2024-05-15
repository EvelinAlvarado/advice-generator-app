function App() {
  return (
    <>
      <article className="bg-Dark-Grayish-Blue w-[342px] rounded-xl px-[30px] pt-10 pb-16 text-center relative ">
        <h2 className="text-Neon-Green uppercase mb-6 tracking-[4px] text-xs">
          Advice #<span id="adviceId">117</span>
        </h2>
        <p
          className="text-Light-Cyan text-[22px] font-extrabold mb-6"
          id="advice"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          atque facere, omnis repellendust."
        </p>
        <img
          src="../src/assets/images/pattern-divider-mobile.svg"
          alt="divider"
        />
        <div className="bg-Neon-Green w-[66px] h-[66px] rounded-full grid  place-content-center absolute bottom-[-33px] left-[138px] cursor-pointer hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)] ">
          <img src="../src/assets/images/icon-dice.svg" alt="dice" />
        </div>
      </article>

      <footer className="text-Light-Cyan absolute top-[90%] text-xs left-[21%] md:left-[35%] lg:left-[42%] text-center tracking-[2px] ">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <strong className="hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)]">
            <a href="#">Evelin</a>
          </strong>{" "}
          .
        </p>

        <div className="flex justify-center gap-2 tracking-tight">
          <a
            href="https://github.com/EvelinAlvarado"
            target="_blank"
            className="w-4 hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)]"
          >
            <img src="github.svg" alt="GitHub" className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/evelinalvarado/"
            target="_blank"
            className="w-4 hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)]"
          >
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
