import { useState } from "react";

export default function Rrr() {
  const [state, setState] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setState((prev) => prev - 1)}>
        -
      </button>
      React wow {state}
      <button type="button" onClick={() => setState((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
}
