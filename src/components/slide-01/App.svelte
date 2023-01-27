<script>
  import Nested from "./Nested.svelte";

  let width = 500;
  const src = `https://picsum.photos/${width}`;

  console.log("GO~ SHOT!");
</script>

<label>
  <input type="range" min="200" max="500" bind:value={width} />
</label>

<Nested {src} {width} />
