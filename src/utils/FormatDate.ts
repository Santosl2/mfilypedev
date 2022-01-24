const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export const FormatDate = (time: number) => {
  const date = new Date(time) ?? new Date();
  return `${
    months[date.getMonth()]
  } ${date.getUTCDate()}, ${date.getFullYear()}`;
};
