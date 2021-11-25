// import "./globals.css";
import { useState } from "react";
import Particles from "react-particles-js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/config/ThemeConfig";
import { particlesData } from "../src/common/particles";
import Navbar from "../src/components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Head>
        <title>Sainayan's Portfolio</title>
        <link rel="icon" type="image/png" href="/code.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Particles params={particlesData} height="100%" />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
