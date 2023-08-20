

export const Counter = ({onIncrement, onDecrement, onMultiply, count }) => {
 
  return (
    <>
      <button onClick={onIncrement}>Sumar </button>
      {count}
      <button onClick={onDecrement}>Restar</button>
      <button onClick={onMultiply}>Multiply</button>
    </>
  );
};
