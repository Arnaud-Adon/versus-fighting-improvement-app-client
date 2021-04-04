import React, { useState, useMemo } from "react";

export const useForm = (defaultValues) => {
  const [formValues, setFormValues] = useState(defaultValues ?? []);
  const [errors, setErrors] = useState([]);
  const [isDirty, setIsDirty] = useState(false);
  const [secure, setSecure] = useState(true);

  const handleChange = (key, value) => {
    setIsDirty(true);
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const validate = () => {
    Object.entries(formValues ?? {}).forEach(([key, value]) => {
      setErrors((prevState) => ({
        ...prevState,
        [key]: !value?.length,
      }));
    });
  };

  const isValid = useMemo(() => {
    return Object.values(errors ?? {}).some((value) => value?.length);
  }, [formValues, handleChange]);

  return {
    formValues,
    errors,
    secure,
    setSecure,
    isValid: Boolean(!isValid && isDirty),
    handleChange,
    validate,
  };
};
