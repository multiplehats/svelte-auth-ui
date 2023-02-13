export const Provider = ['google', 'facebook', 'twitter', 'pinterest', 'github'] as const;
export type ProviderType = (typeof Provider)[number];
