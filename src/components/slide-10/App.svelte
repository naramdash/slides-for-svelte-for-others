<script lang="ts">
  import { count } from "./stores";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import { onDestroy } from "svelte";

  let countValue: number;

  const unsubscribeCount = count.subscribe((value) => {
    countValue = value;
  });

  onDestroy(() => {
    unsubscribeCount();
  });
</script>

<h1>The count is {countValue}</h1>

<Incrementer />
<Decrementer />
