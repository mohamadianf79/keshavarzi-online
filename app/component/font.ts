import localFont from "next/font/local";
const RokhFont = localFont({
  src: [
    { path: "../../public/font/woff2/Rokh-Black.woff2", weight: "900" },
    { path: "../../public/font/woff2/Rokh-Bold.woff2", weight: "700" },
    {
      path: "../../public/font/woff2/Rokh-ExtraBold.woff2",
      weight: "800",
    },

    { path: "../../public/font/woff2/Rokh-Black.woff2", weight: "800" },
    { path: "../../public/font/woff2/Rokh-Light.woff2", weight: "300" },

    {
      path: "../../public/font/woff2/Rokh-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/font/woff2/Rokh-SemiBold.woff2",
      weight: "600",
    },
    { path: "../../public/font/woff2/Rokh-Thin.woff2", weight: "200" },
  ],
});
export { RokhFont };