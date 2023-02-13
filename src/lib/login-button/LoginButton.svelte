<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import type { ProviderType } from '$lib/types';
	import Pulse from '$lib/pulse/Pulse.svelte';

	import Pinterest from '$lib/icons/Pinterest.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Google from '$lib/icons/Google.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Github from '$lib/icons/Github.svelte';

	/**
	 * The provider to use for the button.
	 */
	export let provider: ProviderType;

	/**
	 * Pass a valid Svelte component to override the default icon. Pass `null` to remove the icon.
	 *
	 * @default undefined Auto-detects the provider and uses the default icon.
	 */
	export let icon: typeof SvelteComponent | undefined | null = undefined;

	/**
	 * The label to use for the button. Pass `null` to remove the label.
	 *
	 * @default undefined Auto-detects the provider and uses the default label.
	 */
	export let label: string | undefined | null = undefined;

	export let loading = false;
	export let disabled = false;

	/**
	 * Whether to show a loader inside the button when `loading` or `disabled` is true.
	 */
	export let withLoader = false;

	const busyClass = 'opacity-75 cursor-not-allowed';

	$: mappedLabel = {
		google: 'Continue with Google',
		facebook: 'Continue with Facebook',
		twitter: 'Continue with Twitter',
		pinterest: 'Continue with Pinterest',
		github: 'Continue with GitHub'
	}[provider];

	$: mappedIcon = {
		google: Google,
		facebook: Facebook,
		twitter: Twitter,
		pinterest: Pinterest,
		github: Github
	}[provider];
</script>

<button
	type="button"
	{...$$restProps}
	class={cn(
		'inline-flex items-center bg-white justify-center font-semibold tracking-wide h-12 rounded-full text-center text-gray-700 border border-gray-200 px-4 py-2 transition duration-30 text-sm sm:text-base hover:border-gray-300 focus:bg-gray-50 active:bg-gray-100 outline-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2',
		loading || disabled ? busyClass : '',
		$$props.class
	)}
	disabled={disabled || loading}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	{#if icon !== null}
		{#if loading && withLoader}
			<div />
		{:else}
			<svelte:component this={icon ? icon : mappedIcon} class="w-5 h-5 mr-2" aria-hidden="true" />
		{/if}
	{/if}

	{#if loading && withLoader}
		<div class="h-5 w-5 flex items-center justify-center mr-2 overflow-visible">
			<Pulse class="w-2 h-2" aria-hidden="true" role="status" />
		</div>
	{/if}

	{#if label !== null}
		<span class="select-none">{label ? label : mappedLabel}</span>
	{/if}
</button>
