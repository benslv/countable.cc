import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import { globalStyles } from "styles/globalStyles";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}
