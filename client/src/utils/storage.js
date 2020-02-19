export const setStorage = (item, value) => {
  window.localStorage.setItem(item, value);
};

export const getStorage = item => {
  return window.localStorage.getItem(item);
};

export const removeItem = item => {
  return window.localStorage.removeItem(item);
};
