import ajax from "./ajax";

export const login = async (username, password) =>
  ajax("/login", { username, password }, "POST");
