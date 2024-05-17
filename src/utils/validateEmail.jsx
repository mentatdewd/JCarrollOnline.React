export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  if (password.isTouched) {
    if (password.value.length < 8) {
      return false;
    }

    const ucRegex = /[A-Z]/;
    if (!ucRegex.test(password.value)) {
      return false;
    }

    const spRegex = /[^A-Za-z0-9]/;
    if (!spRegex.test(password.value)) {
      return false;
    }

    const dRegex = /[0-9]/;
    if(!dRegex.test(password.value)) {
      return false;
    }
    
    return true;
  }
}