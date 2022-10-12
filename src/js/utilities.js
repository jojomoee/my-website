

export function $(selector, parent) {
  return (parent ? parent : document).getElementById(selector);
}
