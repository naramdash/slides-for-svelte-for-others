<script>
  import ObjectContext from "./ObjectContext.svelte";
  import ObjectFieldInfo from "./ObjectFieldInfo.svelte";

  const obj = {
    field1: "YES",
    field2: "YESS",
    field3: "YESSS",
  };
</script>

<ObjectContext {obj}>
  <ObjectFieldInfo fieldName="field1" />
  <ObjectFieldInfo fieldName="field2" />
  <ObjectFieldInfo fieldName="field3" />
</ObjectContext>
