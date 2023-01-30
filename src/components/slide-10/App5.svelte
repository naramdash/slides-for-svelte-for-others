<script>
  import { count2 } from "./stores.ts";
</script>

<h1>The count is {$count2}</h1>

<button on:click={count2.increment}>+</button>
<button on:click={count2.decrement}>-</button>
<button on:click={count2.reset}>reset</button>
