export function validateEmail(email) {
    const rex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  
    return rex.test(email)
  }