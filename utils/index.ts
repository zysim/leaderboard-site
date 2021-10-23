export const appendOrdinalSuffix = (input: number) => {
  if ([11, 12, 13].indexOf(input % 100) > -1) {
    return `${input}th`;
  }
  switch (input % 10) {
    case 1:
      return `${input}st`;
    case 2:
      return `${input}nd`;
    case 3:
      return `${input}rd`;
    default:
      return `${input}th`;
  }
};
