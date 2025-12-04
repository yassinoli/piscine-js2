function sunnySunday(date) {
  const millesec = 24 * 60 * 60 * 1000;

  const base = new Date(Date.UTC(1, 0, 1));

  const dfDays = Math.floor((date - base) / millesec);

  const weekdys = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];

  const weekdayIdx = ((dfDays % 6) + 6) % 6; 

  return weekdys[weekdayIdx];
}
