<script>
  let x = 2;
</script>

{#if x > 10}
  <p>{x} is greater than 10</p>
{:else if 5 > x}
  {#if 3 > x}
    <p>{x} is less than 3</p>
  {:else}
    <p>{x} is less than 5</p>
  {/if}
{:else}
  <p>{x} is between 5 and 10</p>
{/if}
