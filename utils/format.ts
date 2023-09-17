export const formatDate = (date: string) => {
  const obj = new Date(date);
  const tokens = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
    .format(obj)
    .split(' ');
  // Abbreviate month if longer than 3 characters
  tokens[0] = tokens[0].length > 3 ? tokens[0].slice(0, 3) + '.' : tokens[0];
  return `${tokens[0]} ${tokens.slice(1).join(' ')}`;
};

export const formatReadableTimeAsSeconds = (time: string) => {
  const tokens = time
    .split(':')
    .map((str) => parseInt(str))
    .reverse();
  let seconds = tokens[0];
  if (tokens[1]) seconds += tokens[1] * 60; // minutes
  if (tokens[2]) seconds += tokens[2] * 60 * 60; // hours
  return seconds;
};
