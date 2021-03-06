module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "css", "md", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
