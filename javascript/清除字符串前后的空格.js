function trim(str) {
  if (!str || typeof str !== "string") return;
  return str.replace(/(^\s*)|(\s*)$/g, "");
}
