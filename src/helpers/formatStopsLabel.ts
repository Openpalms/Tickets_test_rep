export const formatStopsLabel = (stops: number) => {
  if (stops === 0 || stops >= 5) {
    return ' пересадок';
  } else if (stops === 1) {
    return ' пересадка';
  } else {
    return ' пересадки';
  }
};
