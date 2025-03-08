import { createContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Desestructuring, { Category } from "./components/Desestructuring";

// 6 - useState
import State from "./components/State";

// 11 - utilizando contexto
import Context from "./components/Context";

// 9 - type
type textOrNull = string | null;

type fixed = "Isso" | "ou" | "aquilo";

// 10 - context
interface IAppContext {
  language: String;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Douglas";
  const age: number = 27;
  const isStudiyng: boolean = true;

  // 2 funções
  const userGreeting = (name: string): String => {
    return `Olá, ${name}`;
  };

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "oops";

  const testandoFixed: fixed = "Isso";

  // 10 - context

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age} anos</p>
        {isStudiyng && <div>Está Estudando!</div>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />

        <Desestructuring
          title="Primeiro Post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.JS}
        />

        <Desestructuring
          title="Segundo Post"
          content="Mais conteúdo"
          commentsQty={20}
          tags={["php", "mysql", "laravel"]}
          category={Category.LRV}
        />
        <State />

        {myText && <p>Tem texto na variável</p>}

        {mySecondText && <p>Tem texto na variável</p>}

        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
