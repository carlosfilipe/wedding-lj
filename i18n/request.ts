import { getUserLocale } from '@/services/locale';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './config';

import en from './locales/english.json';
import ptBR from './locales/portuguese.json';
import es from './locales/spanish.json';

const messages: Record<Locale, typeof ptBR> = {
    'EN': en,
    'pt-BR': ptBR,
    'ES': es,
};

export default getRequestConfig(async () => {
    const locale = await getUserLocale() as Locale;

    return {
        locale,
        messages: messages[locale],
    };
});