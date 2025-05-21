
module.exports = function (eleventyConfig) {
  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy("./src/assets");
 

 
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
