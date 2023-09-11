<script lang="ts">
	export let data: any;
</script>

<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
