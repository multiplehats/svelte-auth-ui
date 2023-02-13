<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import slugify from 'slugify';

	export let label = '';
	export let checked = false;

	$: labelId = slugify(label, { lower: true, replacement: '-' });
</script>

<div class="flex flex-col">
	<label for={labelId} class="block text-sm font-medium text-gray-700">
		{label}
	</label>

	<button
		on:click={() => (checked = !checked)}
		type="button"
		class={cn(
			'relative mt-2 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
			checked ? 'bg-indigo-600' : 'bg-gray-200'
		)}
		role="switch"
		aria-checked={checked}
		aria-labelledby={labelId}
	>
		<span
			aria-hidden="true"
			class={cn(
				' pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
				checked ? 'translate-x-5' : 'translate-x-0'
			)}
		/>
	</button>
</div>
