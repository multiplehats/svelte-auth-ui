<script lang="ts">
	import { cn } from '$lib/utils/cn';
</script>

<span class={cn('simple-pulse', $$props.class)} role="status" aria-hidden="true" />

<style>
	.simple-pulse {
		display: inline-block;
		vertical-align: -0.125em;
		background-color: currentColor;
		border-radius: 50%;
		opacity: 0;
		animation: 0.8s linear infinite spinner-grow;
	}

	@-webkit-keyframes spinner-grow {
		0% {
			transform: scale(0);
		}

		50% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes spinner-grow {
		0% {
			transform: scale(0);
		}

		50% {
			opacity: 1;
			transform: none;
		}
	}
</style>
