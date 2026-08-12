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
      id: "white",
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

  designTitle: "لكل قطعة قصة و لكل رمز معنى",
  designDescription: [
    "تصميم مستوحى من فخامة الاصالة العربية و روح الحكايات القديمة و السجاد التراثي في المنتصف ليعطي احساسا واضحاً بالاصالة و العمق و الهوية",
    "حرف الواو هنا ليس مستخدمًا بشكل عشوائي؛ فالواو في اللغة العربية ترمز إلى الربط، والامتداد، والاستمرار، وكأنها تقول إن كل قصة لا تنتهي عند نقطة واحدة، بل تمتد بتفاصيل وتجارب",
    "هذا الإصدار الأول من قصة يحتفي بالبداية — نقطة الانطلاق التي تُروى منها كل الحكايات القادمة.",
  ],

  fabricIntro:
    "القماش هنا ليس تفصيلاً تقنيًا، بل جزء من الحكاية نفسها — يُختار بنفس العناية التي تُختار بها الكلمات.",
  fabricDetails: [
    {
      label: "نوع القماش",
      value: "قطن 100% مصنّف بجودة عالية، منسوج بكثافة مريحة للاستخدام اليومي.",
    },
    {
      label: "التطريز",
      value: "تطريز ثلاثي الابعاد يعطي ، يعطي شعور الفخامة و الرقي",
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
  {
    heightRange: "155 - 165",
    weightRange: "45 - 55",
    relaxedFit: "XS أو S",
    oversizedFit: "S",
  },
  {
    heightRange: "160 - 170",
    weightRange: "56 - 65",
    relaxedFit: "S",
    oversizedFit: "M",
  },
  {
    heightRange: "170 - 180",
    weightRange: "66 - 78",
    relaxedFit: "S",
    oversizedFit: "M",
  },
  {
    heightRange: "175 - 185",
    weightRange: "79 - 90",
    relaxedFit: "M",
    oversizedFit: "L",
  },
  {
    heightRange: "180 - 190",
    weightRange: "91 - 105",
    relaxedFit: "L",
    oversizedFit: "XL",
  },
  {
    heightRange: "185 - 205",
    weightRange: "106 - 130",
    relaxedFit: "XL",
    oversizedFit: "XXL",
  },
],

  nextButtonLabel: "التالي",
  backButtonLabel: "رجوع",
};
