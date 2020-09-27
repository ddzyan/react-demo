export const get = key => {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return value.indexOf('{') === 0 || value.indexOf('[') === 0
    ? JSON.parse(value)
    : value;
};

export const save = (key, value) => {
  const data = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(key, data);
};

export const remove = key => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
