export const checkValidData = (email, password, firstName, lastName) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$/.test(password);

  const isFirstNameValid = /^(?!\s)([a-z ,.'-]+)$/i.test(firstName);

  const isLastNameValid = /^(?!\s)([a-z ,.'-]+)$/i.test(lastName);

  if (!isEmailValid) return "Email Id is not valid.";
  if (!isPasswordValid) return "Password is not valid.";
  if (!isFirstNameValid) return "First Name is not valid.";
  if (!isLastNameValid) return "Last Name is not valid.";
  return null;
};
