const formUtil = {
  formDefaults: {
    formValues: { name: "", email: "", password: "", confirmPassword: "" },
    formErrors: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    confirmPasswordValid: false,
    formValid: false,
  },
  formVariables: {
    formValues: { name: "", email: "", password: "", confirmPassword: "" },
    formErrors: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    confirmPasswordValid: false,
    formValid: false,
  },

  setValue: function (fieldName, value) {
    this.formVariables.formValues[fieldName] = value;
  },

  clear: function () {
    this.formVariables = this.formDefaults;
  },

  isEmail: function (email) {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,6})+$/;
    if (!regex.test(email)) return false;
    else return true;
  },

  validateField: function (fieldName, value) {
    const isNotEmpty = value.trim() !== "";
    switch (fieldName) {
      case "name":
        this.formVariables.nameValid = isNotEmpty;
        this.formVariables.formErrors.name = this.formVariables.nameValid
          ? ""
          : " field can't be empty";
        break;
      case "email":
        this.formVariables.emailValid = this.isEmail(value);
        this.formVariables.formErrors.email = this.formVariables.emailValid
          ? ""
          : " is invalid";
        break;
      case "password":
        this.formVariables.passwordValid = isNotEmpty;

        this.formVariables.formErrors.password = this.formVariables
          .passwordValid
          ? ""
          : " field can't be empty";
        break;
      case "confirmPassword":
        this.formVariables.confirmPasswordValid = isNotEmpty;

        this.formVariables.formErrors.confirmPassword = this.formVariables
          .confirmPasswordValid
          ? ""
          : " field can't be empty";
        break;
      default:
        break;
    }
  },

  checkPasswords: function () {
    const match =
      this.formVariables.formValues.confirmPassword ===
      this.formVariables.formValues.password;

    if (match) {
      this.formVariables.passwordValid = true;
      this.formVariables.confirmPasswordValid = true;
      this.formVariables.formErrors.password = "";
      this.formVariables.formErrors.confirmPassword = "";
    } else {
      this.formVariables.passwordValid = false;
      this.formVariables.confirmPasswordValid = false;
      this.formVariables.formErrors.password = "s do not match";
      this.formVariables.formErrors.confirmPassword = "";
    }
  },

  signUpvalidForm: function () {
    return (
      this.formVariables.emailValid &&
      this.formVariables.passwordValid &&
      this.formVariables.nameValid &&
      this.formVariables.confirmPasswordValid
    );
  },

  signInvalidForm: function () {
    return this.formVariables.emailValid && this.formVariables.passwordValid;
  },
};

export default formUtil;
