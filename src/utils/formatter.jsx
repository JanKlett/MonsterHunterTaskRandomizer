const formatNumber = (number, length = 2) => {
  if (number === undefined || number === null) {
    return "";
  }
  const numberLength = number.toString().length;
  return "0".repeat(length - numberLength) + number;
};

const shortenNumber = (number) => {
  if (number < 1000) {
    return number;
  }
  if (number < 1000000) {
    return `${Math.round(number / 100) / 10}k`;
  }
  if (number < 1000000000) {
    return `${Math.round(number / 100000) / 10}M`;
  }
  return `${Math.round(number / 100000000) / 10}B`;
};

const shortenTime = (number) => {
  if (number < 1000) {
    return number + "ms";
  }
  if (number < 60000) {
    return `${Math.round(number / 100) / 10}s`;
  }
  return `${Math.floor(number / 60000)}:${formatNumber(Math.floor(number / 1000)%60)}min`;
};

const seperateNumber = (number) => {
  let result = "";
  let numberString = number.toString();
  while (numberString.length > 3) {
    result = `,${numberString.slice(-3)}${result}`;
    numberString = numberString.slice(0, -3);
  }
  result = `${numberString}${result}`;
  return result;
};


const formatDate = (date, includeTime = false) => {
  if (!includeTime) {
    return `${formatNumber(date.getUTCDate())}.${formatNumber(
      date.getUTCMonth()
    )}.${date.getUTCFullYear()}`;
  }
  return `${formatTime(date)} - ${formatDate(date)}`;
};

const formatTime = (date) => {
  return `${formatNumber(date.getHours())}:${formatNumber(
    date.getMinutes()
  )}:${formatNumber(date.getSeconds())}`;
};

export { formatDate, formatTime, shortenTime, formatNumber, shortenNumber, seperateNumber };
