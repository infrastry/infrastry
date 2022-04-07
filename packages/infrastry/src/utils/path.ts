export const isLinkExternal = (link: string): boolean =>
  link.startsWith('ftp://') || /^(https?:)?\/\//.test(link)
