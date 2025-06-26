import * as i18n from '@solid-primitives/i18n'
import { useParams } from '@solidjs/router'
import { createMemo, createResource } from 'solid-js'

export type Locale = 'en' | 'zh'
export type Dict = Record<Locale, Record<string, string>>

export function useLocale() {
  const params = useParams() as { locale?: Locale }
  return createMemo((): Locale => {
    return params.locale ?? 'zh'
  })
}

export function useTranslator(staticDict: Dict) {
  const locale = useLocale()
  const dict = createMemo(() => i18n.flatten(staticDict[locale()] || {}))
  return i18n.translator(dict, i18n.resolveTemplate)
}

export function useTranslation(dict: Record<Locale, string>) {
  const locale = useLocale()
  const translation = createMemo(() => {
    return dict[locale()] || dict['zh'] || ''
  })
  return translation
}

