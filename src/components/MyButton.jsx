import "./mybutton.css"

const myBtn = {
    name: "Im a btn",
    color: "blue"
}

export const MyButton = () => {
  return (
    <button className="btn">{myBtn.name}</button>
  
    )
}
