export function combineClassName(...args: (string | undefined)[]): string {
  let result = ''
  for (const str of args) {
    if (typeof str === 'undefined') continue
    if (result !== '') result += ' '
    result += str.trim()
  }
  return result
}
