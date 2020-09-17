export function hslToRgb(hsl: [number, number, number]) {
  const [h, s, l] = hsl

  let c = (1 - Math.abs(2 * l - 1)) * s
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  let m = l - c / 2
  let r, g, b

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  } else {
    throw new Error(
      'The first number in the HSL array ' +
        'should be between 0 and 360, inclusive'
    )
  }
  r = ((r + m) * 255).toFixed(2)
  g = ((g + m) * 255).toFixed(2)
  b = ((b + m) * 255).toFixed(2)

  return [r, g, b]
}
