/**
 * return url string without trailing splash
 *
 * @export
 * @param {string} [path='']
 * @param {boolean} [cleanParams=false]
 * @returns {string}
 */
export function cleanUrl(path = '', cleanParams = false): string {
  if (!path) {
    return '';
  }
  if (cleanParams) {
    path = path?.split('?')[0];
  }
  if (path === '/') {
    return '/';
  }

  return path.replace(/\/$/, '').replace(/^\//, '') || '';
}
