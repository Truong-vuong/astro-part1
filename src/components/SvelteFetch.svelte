<script>
import { onMount } from "svelte";

onMount(async () => {
  await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
  .then(response => response.json())
  .then(data => {
		// console.log(data);
  }).catch(error => {
    console.log(error);
    return [];
  });
});
</script>

<div>Svelte </div>