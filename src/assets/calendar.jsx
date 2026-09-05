// Returns an array of cells for a month grid.
// Real days are Date objects; leading padding slots are null.
export function getMonthDays(year, month) {
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstWeekday; i++) {
    cells.push(null) // blank cells before the 1st
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day))
  }
  return cells
}