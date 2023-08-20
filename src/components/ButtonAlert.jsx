export const ButtonAlert = () => {
  function handleClick() {
    alert("Click Event");
  }
  return <button onClick={handleClick}> Click and ejecute event</button>;
};
