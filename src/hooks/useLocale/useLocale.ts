import { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { LocaleContextValueType } from 'context/locale/localeContext/LocaleContext.types';

export const useLocale = (): IntlShape & LocaleContextValueType => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error('LocaleContext is unavailable, make sure you are using LocaleContextController');
  }
  console.log('making new locale');
  return {
    ...intl,
    ...localeContext,
  };
};
