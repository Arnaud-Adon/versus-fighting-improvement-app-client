export const verifEmail = (value) =>
  !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Adresse mail n'est pas valide"
    : undefined;

export const validateNotEmpty = (value) =>
  value ? undefined : "Champs requis";

export const validateEqual = (value1, value2) =>
  value1 && value2 && value1 === value2
    ? undefined
    : "Les valeurs ne sont pas égales";
