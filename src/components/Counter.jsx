export const Counter = ({ sum, onClick }) => {
  return (
    <>
      <button onClick={onClick}>sumando {sum}</button>
    </>
  );
};
