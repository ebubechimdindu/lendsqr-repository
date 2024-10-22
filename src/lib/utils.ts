export const formatCurrency = (amount: number) => {
  if (!amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(80000);
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2
  }).format(amount);
}

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US'
) => {
  const timestamp = new Date(dateStr); // Parse the date string


  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long', // Full month name like "May"
    year: 'numeric',
    hour: 'numeric', // Include hours
    minute: 'numeric', // Include minutes
    hour12: true, // 12-hour format with AM/PM
  };

  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
