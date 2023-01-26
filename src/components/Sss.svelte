<script>
  let state = 0;
</script>

<div>
  <button type="button" on:click={() => state--}> - </button>
  Svelte wow {state}
  <button type="button" on:click={() => state++}> + </button>
</div>
