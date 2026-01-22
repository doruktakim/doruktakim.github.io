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

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-32x32.png": "favicon-32x32.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-16x16.png": "favicon-16x16.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("date", formatDate);

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
