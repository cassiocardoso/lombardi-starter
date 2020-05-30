export const formatDatetime = datetime => {
  const [year, month, day] = datetime.split('T')[0].split('-')

  return `${day}/${month}/${year}`
}
