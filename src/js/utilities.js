export function $(selector, parent) {
  return (parent ? parent : document).querySelector(selector);
}
