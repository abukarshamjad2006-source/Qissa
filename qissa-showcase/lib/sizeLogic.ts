import { SizeRow } from "@/types/product";

function parseRange(range: string): [number, number] {
  const [min, max] = range
    .split("-")
    .map((s) => parseInt(s.trim(), 10));

  return [min, max];
}

export function getSizeRecommendation(
  height: number,
  weight: number,
  rows: SizeRow[]
): SizeRow {
  const scored = rows.map((row) => {
    const [hMin, hMax] = parseRange(row.heightRange);
    const [wMin, wMax] = parseRange(row.weightRange);

    const heightDist =
      height < hMin
        ? hMin - height
        : height > hMax
          ? height - hMax
          : 0;

    const weightDist =
      weight < wMin
        ? wMin - weight
        : weight > wMax
          ? weight - wMax
          : 0;

    return {
      row,
      score: heightDist * 2 + weightDist,
    };
  });

  scored.sort((a, b) => a.score - b.score);

  return scored[0].row;
}
