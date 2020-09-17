import { luminance } from '../luminance'

type RGBArrType = [number, number, number]

export const contrast = (rgb1: RGBArrType, rgb2: RGBArrType) => {
  const c1Lum = luminance(rgb1)
  const c2Lum = luminance(rgb2)
  return (
    1 /
    (c1Lum > c2Lum
      ? (c2Lum + 0.05) / (c1Lum + 0.05)
      : (c1Lum + 0.05) / (c2Lum + 0.05))
  ).toFixed(3)
}
