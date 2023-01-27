<script lang="ts">
  import { getContext } from "svelte";

  export let fieldName: string;

  const obj = getContext("provided-object");

  // @ts-ignore
  $: fieldValue = obj.getObject(fieldName);
</script>

<label>
  <span>
    {fieldName}
  </span>:
  <output>{fieldValue}</output>
</label>

<style>
  label {
    display: block;
  }
</style>
