import { SizeRow } from "@/types/product";

function parseRange(range: string): [number, number] {
  const [min, max] = range
    .split("-")
    .map((value) => Number(value.trim()));

  return [min, max];
}

function isInRange(
  value: number,
  range: string
): boolean {
  const [min, max] = parseRange(range);

  return value >= min && value <= max;
}

export function getSizeRecommendation(
  height: number,
  weight: number,
  rows: SizeRow[]
): SizeRow {
  // 1. البحث عن صف يطابق الطول والوزن معًا
  const exactMatch = rows.find(
    (row) =>
      isInRange(height, row.heightRange) &&
      isInRange(weight, row.weightRange)
  );

  if (exactMatch) {
    return exactMatch;
  }

  // 2. إذا لم يوجد تطابق كامل، البحث حسب الوزن
  const weightMatch = rows.find((row) =>
    isInRange(weight, row.weightRange)
  );

  if (weightMatch) {
    return weightMatch;
  }

  // 3. إذا لم يوجد نطاق مناسب، نبحث عن أقرب نطاق للوزن
  let closestRow = rows[0];
  let closestDistance = Infinity;

  rows.forEach((row) => {
    const [minWeight, maxWeight] = parseRange(row.weightRange);

    let distance = 0;

    if (weight < minWeight) {
      distance = minWeight - weight;
    } else if (weight > maxWeight) {
      distance = weight - maxWeight;
    }

    if (distance < closestDistance) {
      closestDistance = distance;
      closestRow = row;
    }
  });

  return closestRow;
}
