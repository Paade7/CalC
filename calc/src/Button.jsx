export default function Button(props) {
  return (
    <>
      <button className="key" value={props.value} onClick={props.clicked}>
        {props.value}
      </button>
    </>
  );
}
