<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { ProviderSchema, type Provider } from '$lib/types';
	import { pkgName, projectName, projectDesc } from '$components/docs/constants';
	import toast from 'svelte-french-toast';
	import Button from '$lib/login-button/LoginButton.svelte';
	import Input from '$components/docs/Input.svelte';
	import Select from '$components/docs/Select.svelte';
	import Simulatebutton from '$components/docs/Simulatebutton.svelte';
	import Toggle from '$components/docs/Toggle.svelte';
	import Copy from '$components/docs/icons/Copy.svelte';

	let code = '';

	// Button props.
	let provider: Provider = 'google';
	let loading = false;
	let withClickeHandler = false;
	let withLoader = false;
	let disabled = false;
	let icon = true;
	let label = '';

	$: {
		code = `<script lang="ts">\n`;
		code += `	import { LoginButton } from '${pkgName}';\n`;
		// close script, need to escape the slash /
		code += `</\script>\n\n`;

		code += `<Button \n`;
		code += `	provider="${provider}"\n`;
		code += loading ? `	loading\n` : '';
		code += withLoader ? `	withLoader\n` : '';
		code += withClickeHandler ? `	on:click={() => console.log('Handle authentication...')}\n` : '';
		code += disabled ? `	disabled\n` : '';
		code += icon ? '' : `	icon={null}\n`;
		code += label ? `	label="${label}"\n` : '';
		code += '/>';
	}
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<main class="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
		<img
			class="mx-auto h-12 w-auto text-orange-400"
			alt={`${projectName} logo`}
			src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIuNzI5IDE1LjQxNWMuNTA4IDAgMS4zMDMuMzcyIDEuNjk1LjYzOWwtMi4xMzEtNS40MTNjLS40NjQtMS4xNzcgMS4zMDEtMS44MjggMS43NS0uNjg4bDEuNDQzIDMuNjYxYy4xNjcuNDI0LjgwOC4xNzMuNjQxLS4yNTJsLS4zNTUtLjkwM2MuMzE1LS4wMDEuNzUxLS4wNTUgMS4wNTUuMDIxLjE5Ny4wNDkuMzU0LjE1MS40MzQuMzU4bC4yOTIuNzRjLjE2Ni40MjIuODA1LjE3MS42NDEtLjI1MmwtLjMzNy0uODU1Yy40MjYtLjAxNy43My0uMDMgMS4wMS4wNC4xOTkuMDUuMzYuMTUzLjQ0MS4zNjFsLjI0OC42MjhjLjE2Mi40MjUuODA1LjE3NC42NDEtLjI1MWwtLjI3OS0uNzA1Yy4yMzYuMDE2LjQ0Mi4wMzYuNjI3LjA4Mi41MjMuMTMxLjg4NC40NjggMS4yOCAxLjQ3Ny43ODggMi4wMDEuMjA4IDIuODk2IDEuMDAxIDQuOTFsLTUuMjAxIDEuOTg3Yy0yLjA2NC0yLjUyMi00LjQ5NC0zLjI2OS01LjE0NC0zLjY4Mi0xLjI4My0uODItLjc2NS0xLjkwMy4yNDgtMS45MDN6bS0xLjI5MS01LjI2Yy0uMDU1LS43MDkuMzY5LTEuMzM4IDEuMDM5LTEuNjAyLjY1OS0uMjYyIDEuNDAzLS4wOTggMS44NTEuNDY0LS4wNS0xLjExOC0xLjE4NS0xLjg2NS0yLjI0LTEuNDUzLTEuMDUxLjQxNS0xLjM3NyAxLjczNy0uNjUgMi41OTF6bS0uMDg0IDMuNTE0bC0uMjYzLS42NjloLTkuMDkxdi04aDIwdjYuMDVjLjkwMi41NjQgMS4zNzEgMS40NzcgMS42ODUgMi4yNzEuMTM1LjM0MS4yMzQuNjU4LjMxNS45NTh2LTExLjI3OWgtMjR2MTJoMTAuMDA4Yy4yODQtLjU4My43NTMtMS4wNSAxLjM0Ni0xLjMzMXptLTQuMzU0LTQuNjY5YzAgLjU1Mi40NDcgMSAxIDFzMS0uNDQ4IDEtMS0uNDQ3LTEtMS0xLTEgLjQ0OC0xIDF6bS0zIDBjMCAuNTUyLjQ0NyAxIDEgMXMxLS40NDggMS0xLS40NDctMS0xLTEtMSAuNDQ4LTEgMXoiLz48L3N2Zz4="
		/>

		<h2 class="mt-2 text-center text-3xl font-extrabold  text-gray-900">
			{projectName}
		</h2>
		<p class="mt-2 text-center text-base text-gray-600">
			{projectDesc}
		</p>
	</div>

	<div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
		<aside class="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
			<div class="space-y-4">
				<h2 class="text-xl font-medium text-gray-500">Props</h2>

				<Select
					label="Provider"
					options={Object.entries(ProviderSchema.enum).map(([key, value]) => ({
						label: value,
						value: key
					}))}
					bind:value={provider}
				/>

				<Toggle bind:checked={loading} label="Loading" />
				<Toggle bind:checked={withLoader} label="With loading indicator" />
				<Toggle bind:checked={withClickeHandler} label="With click handler" />
				<Toggle bind:checked={disabled} label="Disabled" />
				<Toggle bind:checked={icon} label="Icon" />

				<Input label="Override label" bind:value={label} />
			</div>
		</aside>

		<!-- Payment details -->
		<div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
			<section aria-labelledby="preview">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white py-6 px-4 sm:p-6 flex-col flex items-start">
						<h2 id="preview" class="text-lg font-bold leading-6 mb-4 text-gray-900">Preview</h2>

						<Button
							{provider}
							bind:loading
							{withLoader}
							bind:disabled
							{label}
							icon={icon ? undefined : null}
							on:click={withClickeHandler
								? () => toast.success(`Handle authentication...`)
								: undefined}
						/>

						<hr class="my-6 w-full border-gray-200" />

						<span class="isolate mb-1 inline-flex rounded-xl shadow-sm">
							<Simulatebutton bind:simulate={loading} label="Simulate loading state" />
							<Simulatebutton bind:simulate={disabled} label="Simulate disabled state" />
						</span>
					</div>
				</div>
			</section>

			<!-- Plan -->
			<section aria-labelledby="code">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="space-y-6 bg-white py-6 px-4 sm:p-6">
						<h2 id="code" class="text-lg font-medium leading-6 text-gray-900 mb-4">Code</h2>

						<div class="relative">
							<div class="absolute right-2 top-2">
								<button
									on:click={() => {
										navigator.clipboard.writeText(code);
										toast.success('Copied to clipboard');
									}}
									class="group relative h-9 w-9 items-center justify-center flex bg-gray-700 rounded-lg"
								>
									<Copy
										class="h-8 w-8 stroke-white transition group-hover:rotate-[-4deg] group-hover:stroke-gray-100"
									/>
								</button>
							</div>
							<HighlightSvelte {code} />
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	:global(.hljs) {
		border-radius: 12px;
	}
</style>
