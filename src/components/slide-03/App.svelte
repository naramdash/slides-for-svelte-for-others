<script>
  let current = "foo";

  $: selected = current === "baz";
</script>

<button
  class={current === "foo" ? "selected" : ""}
  on:click={() => (current = "foo")}>foo</button
>

<button class:selected={current === "bar"} on:click={() => (current = "bar")}
  >bar</button
>

<button class:selected on:click={() => (current = "baz")}>baz</button>

<style>
  button {
    display: block;
  }

  .selected {
    background-color: #ff3e00;
    color: white;
  }
</style>
