import { z } from 'zod';

export const ProviderSchema = z.enum(['google', 'facebook', 'twitter', 'pinterest', 'github']);
export type Provider = z.infer<typeof ProviderSchema>;

export const ButtonPropsSchema = z.object({
	provider: ProviderSchema,
	label: z.string().nullable().optional()
});
