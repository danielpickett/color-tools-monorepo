export const hexToRgb = (hex: string) => [
  +('0x' + hex[1] + hex[2]),
  +('0x' + hex[3] + hex[4]),
  +('0x' + hex[5] + hex[6]),
]
