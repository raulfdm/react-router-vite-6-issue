import { assign, setup } from "xstate";
import { useMachine } from "@xstate/react";

const machine = setup({
  types: {
    context: {} as { counter: number },
    events: {} as {
      type: "INCREMENT" | "DECREMENT";
    },
  },
  actions: {
    increment: assign({
      counter: ({ context }) => context.counter + 1,
    }),
    decrement: assign({
      counter: ({ context }) => context.counter - 1,
    }),
  },
}).createMachine({
  context: {
    counter: 0,
  },
  on: {
    INCREMENT: {
      actions: "increment",
    },
    DECREMENT: {
      actions: "decrement",
    },
  },
});

export function Xstate() {
  const [state, send] = useMachine(machine);

  return (
    <div>
      <button onClick={() => send({ type: "DECREMENT" })} type="button">
        -
      </button>

      <h2>count is {state.context.counter}</h2>
      <button onClick={() => send({ type: "INCREMENT" })} type="button">
        +
      </button>
    </div>
  );
}
