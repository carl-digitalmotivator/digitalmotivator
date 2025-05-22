
module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/assets");


   eleventyConfig.addCollection("quotes", function (collection) {
  return collection.getFilteredByGlob("src/_quotes/*.md");
});
 
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };



};
