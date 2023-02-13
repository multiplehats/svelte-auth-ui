<script lang="ts">
	import slugify from 'slugify';

	export let label = '';
	export let value = '';

	$: labelId = slugify(label, { lower: true, replacement: '-' });
</script>

<div>
	<label for={labelId} class="block text-sm font-medium text-gray-700">
		{label}
	</label>

	<div class="mt-1">
		<input
			bind:value
			type="text"
			name={labelId}
			id={labelId}
			class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			{...$$restProps}
		/>
	</div>
</div>
