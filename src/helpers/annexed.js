const anio = new Date().getFullYear();

const anios = [
  {
    value: anio - 2,
    label: anio - 2,
  },
  {
    value: anio - 1,
    label: anio - 1,
  },
  {
    value: anio,
    label: anio,
  },
  {
    value: anio + 1,
    label: anio + 1,
  },
];

export { anios };
