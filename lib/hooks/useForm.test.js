import { renderHook, act } from "@testing-library/react-hooks";
import { countries } from "../utils/country/countriesList";
import { useForm } from "./useForm";

describe("useForm Hook test suite", () => {
  const defaultValues = {
    username: "",
    email: "",
    birthdayDate: new Date().toDateString(),
    country: countries[0].name,
    password: "",
    confirmPassword: "",
  };

  // it("Should return true", () => {
  //   expect(true).toBeTruthy();
  // });
  it("should return true when formValue exist", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.formValues).toBeTruthy();
  });

  it("should return true when errors exist", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.errors).toBeTruthy();
  });

  it("should return true when secure exist", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.secure).toBeTruthy();
  });

  it("should return false when setSecure(false)", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setSecure(false);
    });
    expect(result.current.secure).toBeFalsy();
  });

  it("should return true when isValid is a boolean", () => {
    const { result } = renderHook(() => useForm());
    expect(typeof result.current.isValid).toEqual("boolean");
  });

  it("should return same object when formValues is update", () => {
    const date = new Date().toDateString();
    const attemptedValues = {
      username: "Toto",
      email: "toto@test.com",
      birthdayDate: date,
      country: countries[2].name,
      password: "pass",
      confirmPassword: "pass",
    };
    const { result } = renderHook(() => useForm(defaultValues));

    act(() => {
      result.current.handleChange("username")("Toto");
      result.current.handleChange("email")("toto@test.com");
      result.current.handleChange("birthdayDate")(date);
      result.current.handleChange("country")(countries[2].name);
      result.current.handleChange("password")("pass");
      result.current.handleChange("confirmPassword")("pass");
    });
    expect(result.current.formValues).toMatchObject(attemptedValues);
  });

  it("should match between formValues and defaultValues object ", () => {
    const { result } = renderHook(() => useForm(defaultValues));
    act(() => {
      result.current.register(defaultValues);
    });
    expect(result.current.formValues).toMatchObject(defaultValues);
  });

  it("should return true when errors contain more one true boolean", () => {
    const { result } = renderHook(() => useForm(defaultValues));
    act(() => {
      result.current.validate();
    });
    expect(Object.values(result.current.errors).some((value) => value)).toEqual(
      true
    );
  });

  it("should return true for isValid", () => {
    const { result } = renderHook(() => useForm(defaultValues));
    act(() => {
      result.current.handleChange("username")("Toto");
      result.current.handleChange("email")("toto@test.com");
      result.current.handleChange("password")("pass");
      result.current.handleChange("confirmPassword")("pass");
      result.current.validate(result.current.formValues);
    });

    expect(result.current.isValid).toEqual(true);
  });

  it("Should return passwordIsValid equal true", () => {
    const { result } = renderHook(() => useForm(defaultValues));
    act(() => {
      result.current.handleChange("password")("mock-password");
      result.current.handleChange("confirmPassword")("mock-another-password");
    });

    expect(result.current.passwordIsValid).toEqual(true);
  });
});
