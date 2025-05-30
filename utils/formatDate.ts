export const formatDate = (isoDateStr: string): { time: string; date: string } => {
  const dateObj = new Date(isoDateStr);

  const date = dateObj.toLocaleDateString('sv-SE');

  const time = dateObj.toLocaleTimeString('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return { date, time };
};
