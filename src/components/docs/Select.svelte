<script lang="ts">
	import slugify from 'slugify';

	export let label = '';
	export let options: {
		label: string;
		value: string;
	}[] = [];

	export let value = '';

	$: labelId = slugify(label, { lower: true, replacement: '-' });
</script>

<div>
	<label for={labelId} class="block text-sm font-medium text-gray-700">
		{label}
	</label>
	<select
		bind:value
		id={labelId}
		name={labelId}
		class="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
	>
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
