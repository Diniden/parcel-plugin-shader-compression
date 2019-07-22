const package = require(
  require('app-root-path').resolve('/package.json')
);

module.exports = function (bundler) {
  if (package.shader) {
    // If the shader config specifies compress: true, then we ALWAYS compress the shader resources
    if (package.shader.compress === true) {
      process.env.SHADER_FORCE_COMPRESS = true;
    }

    if (Array.isArray(package.shader.fileExt)) {
      package.shader.forEach(fileType => {
        bundler.addAssetType(fileType, require.resolve('./ShaderStringAsset.js'));
      });
    }
  }
};
