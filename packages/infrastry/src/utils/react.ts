export const combineClassName = (
  ...args: (string | undefined)[]
): string | undefined =>
  args.reduce((x, y) => (x || '') + ' ' + (y || ''))?.trim()
