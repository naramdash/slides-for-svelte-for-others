<script>
  export let name;
  export let version;
  export let speed = NaN;
  export let website;
</script>

<p>
  The <code>{name}</code> package is {speed} fast.
  <br />
  Download version {version} from
  <a href="https://www.npmjs.com/package/{name}">npm</a>
  and <a href={website}>learn more here</a>
</p>
