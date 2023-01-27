<script lang="ts">
  import { setContext } from "svelte";

  export let obj = {};

  setContext("provided-object", {
    getObject(propertyName: string) {
      // @ts-ignore
      return obj[propertyName];
    },
  });
</script>

<slot />
