<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher<{ simulating: boolean }>();

	export let label = '';
	export let simulate = false;
	export let timeMs = 4000;

	let clicked = false;
	let countdown: number = timeMs;
	const countdownInterval = 1000;

	function handleClick() {
		simulate = true;
		clicked = true;

		dispatch('simulating', true);

		let interval = setInterval(() => {
			countdown -= countdownInterval;
			if (countdown <= 0) {
				clearInterval(interval);
			}
		}, countdownInterval);

		setTimeout(() => {
			simulate = false;

			// reset countdown
			countdown = timeMs;
			clearInterval(interval);
			clicked = false;
			dispatch('simulating', false);
		}, timeMs);
	}
</script>

<button
	type="button"
	disabled={simulate}
	on:click={handleClick}
	class={cn(
		'relative inline-flex items-center rounded-l-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
		simulate && 'opacity-50 cursor-not-allowed',
		simulate && clicked && 'opacity-100 text-red-800'
	)}
>
	{label}

	{#if simulate && clicked}
		<span
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200 }}
			class="ml-2 inline-flex rounded-md shadow-sm"
		>
			<span
				class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium  bg-red-100 text-red-800"
			>
				{countdown / 1000}s
			</span>
		</span>
	{/if}
</button>
