import { useState } from "react";

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);

  return display ? (
    <div>
      <h3>This is a conditional statement</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing to se here</h3>
    </div>
  );
}
