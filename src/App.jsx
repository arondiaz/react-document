import { MyButton } from "./components/MyButton";
import { Products } from "./components/Products";
import { ButtonAlert } from "./components/ButtonAlert";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);

  function sumClick() {
    setSum(sum + 1);
  }
  return (
    <>
      <h1>hola</h1>
      <MyButton />

      <Products />

      <ButtonAlert />

      <Counter sum={sum} onClick={sumClick} />
      <Counter sum={sum} onClick={sumClick} />
    </>
  );
}

export default App;
