const path = require("path");

process.env.BROWSER = "none";

module.exports = {
  plugins: [],
  webpack: {
    alias: {
      "^@/(.*)$": path.resolve(__dirname, "./src/$1"),
      "@atoms": path.resolve(__dirname, "src", "components/atoms"),
      "@molecules": path.resolve(__dirname, "src", "components/molecules"),
      "@organisms": path.resolve(__dirname, "src", "components/organisms"),
      "@pages": path.resolve(__dirname, "src", "components/pages"),
      "@templates": path.resolve(__dirname, "src", "components/templates"),
      "@utils": path.resolve(__dirname, "src", "utils"),   
      "@hooks": path.resolve(__dirname, "src", "hooks"),   
      "@mocks": path.resolve(__dirname, "__mocks__"),
      "@context": path.resolve(__dirname, "src", "context"),
      "@constants": path.resolve(__dirname, "src", "constants"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  jest: {
    transformIgnorePatterns: [
      "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
    ],
    configure: {
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@atoms(.*)$": "<rootDir>/src/components/atoms/$1",
        "^@molecules(.*)$": "<rootDir>/src/components/molecules/$1",
        "^@organisms(.*)$": "<rootDir>/src/components/organisms/$1",
        "^@pages(.*)$": "<rootDir>/src/components/pages/$1",
        "^@templates(.*)$": "<rootDir>/src/components/templates/$1",
        "^@utils(.*)$": "<rootDir>/src/utils/$1",
        "^@hooks(.*)$": "<rootDir>/src/hooks/$1",
        "^@mocks(.*)$": "<rootDir>/__mocks__/$1",
        "^@context(.*)$": "<rootDir>/src/context/$1",
        "^@constants(.*)$": "<rootDir>/src/constants/$1",
      },
    },
  },
};
