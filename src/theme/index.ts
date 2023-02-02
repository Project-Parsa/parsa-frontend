import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"DM Sans", "sans-serif"`,
  body: `"DM Sans", "sans-serif"`,
  mono: `"DM Sans", "sans-serif"`,
};

export default extendTheme({ config, fonts });
