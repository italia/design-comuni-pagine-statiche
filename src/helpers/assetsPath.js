module.exports = (path, isSubdirectory = false) => {
  if (isSubdirectory) return `../${path}`;
  return path;
};
