export function getRatioFromDimensions(dimensions) {
  const { height, width } = dimensions
  return (height / width) * 100
}
