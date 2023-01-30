<script>
  import { count } from "./stores.ts";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";

  $: console.log($count);
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
