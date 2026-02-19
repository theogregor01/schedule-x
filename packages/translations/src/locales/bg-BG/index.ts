import { datePickerBgBG } from './date-picker'
import { Language } from '@schedule-x/shared/src/types/translations/language.translations'
import { calendarBgBG } from './calendar'
import { timePickerBgBG } from './time-picker'

export const bgBG: Language = {
  ...datePickerBgBG,
  ...calendarBgBG,
  ...timePickerBgBG,
}
