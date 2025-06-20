// const { getDefaultConfig } = require("metro-config");

// const config = getDefaultConfig(__dirname);

// config.transformer.babelTransformerPath = require.resolve("nativewind/babel");

// module.exports = config;


// const { getDefaultConfig } = require("metro-config");

// const config = getDefaultConfig(__dirname);

// config.transformer = {
//   ...config.transformer,
//   babelTransformerPath: require.resolve("nativewind/babel"),
// };

// module.exports = config;

// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const config = await getDefaultConfig();
//   const { assetExts, sourceExts } = config.resolver;

//   config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
//   config.resolver.sourceExts = [...sourceExts, 'svg'];
//   config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

//   return config;
// })();

 /* Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
