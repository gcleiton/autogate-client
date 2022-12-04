import * as DateFns from 'date-fns'

export const formatDate = (date: Date, format: string) => {
  return DateFns.format(date, format)
}
