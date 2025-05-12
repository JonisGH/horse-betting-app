import { useMemo } from 'react';

type FormatOptions = {
  locale?: string;
  time?: boolean;
  date?: boolean;
};

type UseFormatDateReturn = {
  time?: string;
  date?: string;
};

export const useFormatDate = (
  isoString: string | undefined,
  options: FormatOptions = { locale: 'en-GB', time: true, date: true },
): UseFormatDateReturn => {
  return useMemo(() => {
    if (!isoString) return {};

    const dateObj = new Date(isoString);
    const { locale = 'en-GB', time, date } = options;
    const result: UseFormatDateReturn = {};

    if (time) {
      result.time = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(dateObj);
    }

    if (date) {
      result.date = new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(dateObj);
    }

    return result;
  }, [isoString, options]);
};
