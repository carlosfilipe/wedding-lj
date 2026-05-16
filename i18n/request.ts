import { getUserLocale } from '@/services/locale';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './config';

const localeFileMap: Record<Locale, string> = {
    'EN': 'english.json',
    'pt-BR': 'portuguese.json',
    'ES': 'spanish.json',
};

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const locale = await getUserLocale() as Locale;

    return {
        locale,
        messages: (await import(`./locales/${localeFileMap[locale]}`)).default
    };
});