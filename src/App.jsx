import { MyButton } from "./components/MyButton";
import { Products } from "./components/Products";
import { ButtonAlert } from "./components/ButtonAlert";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleRest() {
    setCount(count - 1);
  }

  function handleMult(){
    setCount(count * 2)
  }

  return (
    <>
      <h1>hola</h1>
      <MyButton />

      <Products />

      <ButtonAlert />

      <Counter
        onIncrement={handleClick}
        onDecrement={handleRest}
        onMultiply={handleMult}
        count={count}
      />

      <Counter
        onIncrement={handleClick}
        onDecrement={handleRest}
        onMultiply={handleMult}
        count={count}
      />
    </>
  );
}

export default App;
