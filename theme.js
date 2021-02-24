import { extendTheme } from "@chakra-ui/core";
import { theme } from "@chakra-ui/theme";

export default extendTheme({
  colors: {
    primary: theme.colors.twitter,
    secondary: theme.colors.gray,
  },
});
