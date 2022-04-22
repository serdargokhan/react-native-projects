import { extendTheme } from "native-base";

export const theme = extendTheme({
    colors: {
        primary: {
            100: "#6C63FF",
        },
    },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
    interface ICustomTheme extends CustomThemeType {}
}
