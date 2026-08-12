export type SizeResult = {
  recommended: string;
  oversize: string;
};

type SizeBand = {
  hMin: number;
  hMax: number;
  wMin: number;
  wMax: number;
  recommended: string;
  oversize: string;
};

const sizeBands: SizeBand[] = [
  {
    hMin: 155,
    hMax: 165,
    wMin: 45,
    wMax: 55,
    recommended: "XS أو S",
    oversize: "S",
  },
  {
    hMin: 160,
    hMax: 170,
    wMin: 56,
    wMax: 65,
    recommended: "S",
    oversize: "M",
  },
  {
    hMin: 170,
    hMax: 180,
    wMin: 66,
    wMax: 78,
    recommended: "S",
    oversize: "M",
  },
  {
    hMin: 175,
    hMax: 185,
    wMin: 79,
    wMax: 90,
    recommended: "M",
    oversize: "L",
  },
  {
    hMin: 180,
    hMax: 190,
    wMin: 91,
    wMax: 105,
    recommended: "L",
    oversize: "XL",
  },
  {
    hMin: 185,
    hMax: 999,
    wMin: 106,
    wMax: 9999,
    recommended: "XL",
    oversize: "XXL",
  },
];

export function getSizeRecommendation(
  height: number,
  weight: number
): SizeResult {
  أولًا: البحث عن تطابق الطول والوزن معًا
  const exact = sizeBands.find(
    (band) =>
      height >= band.hMin &&
      height <= band.hMax &&
      weight >= band.wMin &&
      weight <= band.wMax
  );

  if (exact) {
    return {
      recommended: exact.recommended,
      oversize: exact.oversize,
    };
  }

  // ثانيًا: إذا لم يوجد تطابق، نعتمد على الوزن
  const byWeight = sizeBands.find(
    (band) => weight >= band.wMin && weight <= band.wMax
  );

  if (byWeight) {
    return {
      recommended: byWeight.recommended,
      oversize: byWeight.oversize,
    };
  }

  // ثالثًا: اختيار أقرب نطاق للوزن
  let closest = sizeBands[0];
  let minDifference = Infinity;

  sizeBands.forEach((band) => {
    const middle =
      band.wMax >= 9999
        ? band.wMin + 10
        : (band.wMin + band.wMax) / 2;

    const difference = Math.abs(weight - middle);

    if (difference < minDifference) {
      minDifference = difference;
      closest = band;
    }
  });

  return {
    recommended: closest.recommended,
    oversize: closest.oversize,
  };
}
