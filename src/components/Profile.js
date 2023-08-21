export default function Profile(props) {
  const { name, last } = props;

  return (
    <h1>
      Name: {name} {last}
    </h1>
  );
}
