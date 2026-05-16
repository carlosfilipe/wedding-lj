export type Locale = (typeof locales)[number];

export const locales = ['EN', 'pt-BR', 'ES'] as const;
export const defaultLocale: Locale = 'pt-BR';