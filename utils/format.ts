export const formatDate = (releaseDate: string) => {
  const date = new Date(releaseDate);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
