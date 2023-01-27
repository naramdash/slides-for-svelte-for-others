<script lang="ts">
  export let src: string;
  export let width: number;
  export let alternative = "no alt text provided";
</script>

<figure>
  <img {src} {width} alt={alternative} loading="lazy" />
  <figcaption>
    {alternative}
  </figcaption>
</figure>

<style>
  img {
    border: 3px solid red;
  }
</style>
