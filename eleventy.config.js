module.exports = function(eleventyConfig) {
    // Tell 11ty to copy the "css" folder to the output folder
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy({"src/install.sh": "install.sh"})
    // (Optional) Copy images if you had an images folder
    // eleventyConfig.addPassthroughCopy("images");
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };