export const rgbToHex = (rgb: [number, number, number]) =>
  `#${rgb
    .map((c) => {
      if (c > 255 || c < 0) {
        throw new Error(
          'Each channel in the RGB array should be a ' +
            'floating point number between 0 and 255, inclusive'
        )
      }
      const _c = c.toString(16)
      return _c.length === 1 ? '0' + _c : _c
    })
    .join('')}`
