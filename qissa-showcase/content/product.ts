import { ProductContent } from "@/types/product";

/**
 * كل المحتوى النصي والبيانات القابلة للتعديل موجودة هنا فقط.
 * لا حاجة لتعديل أي مكوّن React لتغيير النصوص أو الألوان أو الصور —
 * عدّل هذا الملف فقط.
 *
 * لإضافة صور جديدة للون: ضع الصور داخل public/products/<folder>/
 * بأسماء 1.jpg و 2.jpg ... وحدّث imageCount للعدد الصحيح.
 * لإضافة لون جديد بالكامل: أضف عنصرًا جديدًا لمصفوفة colors أدناه
 * وأنشئ مجلدًا مطابقًا داخل public/products.
 */
export const productContent: ProductContent = {
  brandName: "قصة",
  productName: "تي شيرت قصة — الإصدار الأول",
  tagline: "خيط من الحكاية، على القماش",

  colors: [
    {
      id: "black",
      label: "أسود",
      swatch: "#15170F",
      folder: "black",
      imageCount: 4,
    },
    {
      id: "beige",
      label: "بيج",
      swatch: "#D8C6A1",
      folder: "beige",
      imageCount: 4,
    },
    {
      id: "brown",
      label: "بني",
      swatch: "#8B6F55",
      folder: "white",
      imageCount: 4,
    },
    {
      id: "navy",
      label: "كحلي",
      swatch: "#1E2A3A",
      folder: "navy",
      imageCount: 4,
    },
  ],

  designTitle: "حكاية لا تُروى بالكلام وحدها",
  designDescription: [
    "وُلد هذا التصميم من فكرة أن كل قطعة تحمل حكاية صاحبها قبل أن تحمل قماشها. خط التطريز مستوحى من حروف عربية أعيد تشكيلها بروح معاصرة، لتصبح القطعة توقيعًا لا مجرد لباس.",
    "اخترنا البساطة عن قصد؛ فالتفاصيل الحقيقية لا تحتاج إلى ضجيج. كل غرزة وُضعت بعناية لتُقرأ من قريب، وتُلمح من بعيد.",
    "هذا الإصدار الأول من قصة يحتفي بالبداية — نقطة الانطلاق التي تُروى منها كل الحكايات القادمة.",
  ],

  fabricIntro:
    "القماش هنا ليس تفصيلاً تقنيًا، بل جزء من الحكاية نفسها — يُختار بنفس العناية التي تُختار بها الكلمات.",
  fabricDetails: [
    {
      label: "نوع القماش",
      value: "قطن مصري 100% مصنّف بجودة عالية، منسوج بكثافة مريحة للاستخدام اليومي.",
    },
    {
      label: "الملمس",
      value: "ملمس ناعم وكثيف يمنح القطعة وزنًا مريحًا دون ثقل، مع مرونة خفيفة في القص.",
    },
    {
      label: "الراحة",
      value: "قصة مدروسة تسمح بحرية الحركة، وتهوية طبيعية تناسب الأجواء المعتدلة والحارة.",
    },
    {
      label: "المتانة",
      value: "مقاومة عالية للاهتراء وثبات في اللون بعد الغسيل المتكرر، للحفاظ على مظهرها الأصلي لفترة أطول.",
    },
    {
      label: "الجودة والتصنيع",
      value: "كل قطعة تمر بفحص يدوي دقيق قبل التغليف، والتطريز منفّذ بغرز محكمة لضمان ثباته مع الوقت.",
    },
  ],

  sizeChartTitle: "جدول المقاسات",
  sizeChartIntro: "اختر مقاسك بناءً على طولك ووزنك — لكل فئة توصية بمقاس مريح (Relaxed) ومقاس أوفر سايز (Oversized).",
  sizeChartRows: [
    { heightRange: "155 - 175", weightRange: "45 - 75", relaxedFit: "S", oversizedFit: "M" },
    { heightRange: "176 - 185", weightRange: "76 - 85", relaxedFit: "M", oversizedFit: "L" },
    { heightRange: "186 - 195", weightRange: "86 - 95", relaxedFit: "L", oversizedFit: "XL" },
    { heightRange: "186 - 195", weightRange: "95 - 100", relaxedFit: "XL", oversizedFit: "XL" },
  ],

  nextButtonLabel: "التالي",
  backButtonLabel: "رجوع",
};
