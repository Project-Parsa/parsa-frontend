import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Epilogue", serif`,
  body: `"Epilogue", serif`,
  mono: `"Epilogue", serif`,
};

export default extendTheme({ config, fonts });
