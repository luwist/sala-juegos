export function alignHorizontal(size: number): number {
  return 960 / 2 - size / 2;
}

export function alignVertical(size: number): number {
  return 540 / 2 - size / 2;
}

export function alignTop(spacing = 0): number {
  return 540 - spacing;
}

export function alignRight(size: number): number {
  return 540 / 2 - size / 2;
}
