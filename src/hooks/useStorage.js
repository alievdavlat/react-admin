export const addItem = ( key , value ) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}


export const getItem = ( key ) => {
  return JSON.parse(window.localStorage.getItem(key))
}

export const removeItem = ( key ) => {
  window.localStorage.removeItem(key)
}

