export default function FunctionEvent() {
  function handleClick() {
    console.log("button is clicked");
  }
  return (
    <div>
      <h3>Click button to unlock secret</h3>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
