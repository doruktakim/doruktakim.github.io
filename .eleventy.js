const formatDate = (value, format = "%B %d, %Y") => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  if (format === "%Y") {
    return String(date.getFullYear());
  }

  if (format === "%B %d, %Y") {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    return `${month} ${day}, ${date.getFullYear()}`;
  }

  return date.toDateString();
};

const formatDateLocalized = (value, locale = "en-US") => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(date);
};

const normalizeLang = (lang) => String(lang || "en").toLowerCase();

const localeForLang = (lang) => {
  const normalized = normalizeLang(lang);
  if (normalized.startsWith("tr")) return "tr-TR";
  return "en-US";
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-32x32.png": "favicon-32x32.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-16x16.png": "favicon-16x16.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "src/og-image.png": "og-image.png" });
  eleventyConfig.addPassthroughCopy({ "src/og-image.jpg": "og-image.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/og-image-v2.jpg": "og-image-v2.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("date", formatDate);
  eleventyConfig.addFilter("dateLocale", (value, lang) =>
    formatDateLocalized(value, localeForLang(lang))
  );
  eleventyConfig.addFilter("byLang", (collection, lang) => {
    const target = normalizeLang(lang);
    return (collection || []).filter(
      (item) => normalizeLang(item.data.lang) === target
    );
  });
  eleventyConfig.addFilter("translationFor", (collection, key, lang) => {
    if (!key) return null;
    const target = normalizeLang(lang);
    return (collection || []).find(
      (item) =>
        item.data.translationKey === key &&
        normalizeLang(item.data.lang) === target
    );
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
