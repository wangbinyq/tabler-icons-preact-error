import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-preact";

interface CounterProps {
  count: Signal<number>;
}

export default function CounterPreact(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>
        <IconArrowDown />
        -1
      </Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>
        <IconArrowUp />
        +1
      </Button>
    </div>
  );
}
