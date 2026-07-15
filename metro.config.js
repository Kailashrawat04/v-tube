const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add 'cjs' and 'mjs' to the existing sourceExts to support packages like @tanstack/react-query
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "cjs",
  "mjs",
];

module.exports = config;
