# Svelte Auth UI

Svelte Auth UI is a set of authentication components for [Svelte](https://svelte.dev/). These components are designed to simplify implementing authentication in your Svelte app.

👉 [View live demo](https://svelte-auth-ui.vercel.app/)

![hero](https://github.com/multiplehats/svelte-auth-ui/raw/main/static/og.webp)

Add social login buttons for popular services like Twitter, Facebook, and Google with just a few lines of code.

Out of the box you get a set of sane defaults to get you up and running quickly. Start implementing auth logic, instead of worrying about UI.

Overriding components with your own Tailwind classes is as easy as adding a class attribute to the component. With this flexibility, you can easily tailor the components to match your app's unique design and branding.

## Roadmap

> **Warning**
> This is work in progress. You can follow the progress on Twitter [@itschrisjayden](https://twitter.com/itschrisjayden).

### Login button

- [x] ~Pinterest~
- [x] ~Twitter~
- [x] ~Google~
- [x] ~Facebook~
- [x] ~Github~
- [ ] Instagram

### Misc
- [ ] Integrate [Changeset](https://pnpm.io/using-changesets)

## Installation

To install Svelte Auth UI, run the following command:

```bash
  npm install -D svelte-auth-ui@latest

  # pnpm add -D svelte-auth-ui@latest
  # yarn add -D svelte-auth-ui@latest
```

### Update your tailwind.config

Make sure you add `'./node_modules/svelte-auth-ui/**/*.{html,js,svelte,ts}'` to your Tailwind config.

```js
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-auth-ui/**/*.{html,js,svelte,ts}' // 👈 Add this line
	],

	theme: {
		extend: {}
	},

	plugins: [],
	darkMode: 'class'
};

module.exports = config;
```

## Usage

```svelte
<script>
	import { LoginButton } from 'svelte-auth-ui';
</script>

<LoginButton provider="google" />
```

That's it 🚀.

Please refer to the [docs](svelte-auth-ui.vercel.app) to see all the available props.

## FAQ
Here are some commonly asked questions and answers about Svelte Auth UI.


**Q: Does this handle authentication?**

A: This library only provides components and doesn't handle any authentication logic—that's up to you.

**Q: How can I change the styling?**

A: All you need to do is pass Tailwind classes to the `class` prop and you're good to go 👍.

**Q: Why not export each component as it's own?**

A: You may have noticed that there's one single export for the `LoginButton` component, this does increase bundle size by a tiny tiny bit 🤏. However, this how I've done it in most my apps—it's much easier to main. If providers ever go over 20+ I'll consider changing this, but I'll doubt we'll reach that many providers.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
