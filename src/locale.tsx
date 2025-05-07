import * as i18n from '@solid-primitives/i18n'
import { useParams } from '@solidjs/router'
import { createMemo, createResource } from 'solid-js'

export type Locale = 'en' | 'zh'

const useLocale = () => {
  const params = useParams() as { locale?: Locale }
  return createMemo((): Locale => {
    return params.locale ?? 'zh'
  })
}

const useDictionary = (module: string) => {
  const locale = useLocale()
  const [dict] = createResource(locale, async () => {
    const dict = (await import(`~/i18n/${module}.ts`))[locale()]
    return i18n.flatten(dict as Record<string, string>)
  });
  return dict;
}

export { useLocale, useDictionary }
