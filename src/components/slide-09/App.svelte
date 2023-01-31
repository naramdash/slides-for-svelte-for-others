<script>
  import { clickOutside } from "./click_outside.ts";

  let showModal = true;
</script>

<button on:click={() => (showModal = true)}>Show Modal</button>
{#if showModal}
  <div class="box" use:clickOutside on:outclick={() => (showModal = false)}>
    Click outside me!
  </div>
{/if}

<style>
  .box {
    --width: 100px;
    --height: 100px;
    position: absolute;
    width: var(--width);
    height: var(--height);
    left: 50px;
    top: 600px;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    background-color: #ff3e00;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
</style>
