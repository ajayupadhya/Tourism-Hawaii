import "@/styles/globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import type { AppProps } from "next/app";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400" , "500" , "700"],
  style:["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibm_plex_mono.className}>
      <Component {...pageProps} />
    </main>
  );
}
