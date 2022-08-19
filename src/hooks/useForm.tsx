import React, { useState, useMemo } from "react";

export const useForm = (defaultValues) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);
  const [secure, setSecure] = useState(true);

  const handleChange = (key) => (value) => {
    setIsDirty(true);
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const register = (values) => {
    const currentValues = values ?? defaultValues;
    Object.entries(currentValues).forEach(([key, value]) => {
      setFormValues((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    });
  };

  const validate = (values) => {
    const currentValues = values ?? defaultValues;
    Object.entries(currentValues).forEach(([key, value]) => {
      setErrors((prevState) => ({
        ...prevState,
        [key]: typeof value === "object" ? false : !value?.length,
      }));
    });
  };

  const isValid = useMemo(
    () => Object.values(errors ?? {}).some((error) => error),
    [formValues, handleChange]
  );

  const passwordIsValid = useMemo(
    () =>
      Boolean(
        formValues.confirmPassword?.length &&
          formValues.password !== formValues.confirmPassword
      ),
    [formValues, handleChange]
  );

  const emailIsValid = useMemo(
    () =>
      Boolean(
        formValues.email?.length &&
          !/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formValues.email)
      ),
    [formValues, handleChange]
  );

  return {
    formValues,
    errors,
    secure,
    setSecure,
    validate,
    isValid: Boolean(!isValid && isDirty && !passwordIsValid && !emailIsValid),
    passwordIsValid,
    emailIsValid,
    handleChange,
    register,
  };
};
