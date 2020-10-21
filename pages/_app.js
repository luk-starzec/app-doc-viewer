import "normalize.css";
import Search from "../components/shared/Search";
import HomeButton from "../components/shared/HomeButton";
import ThemeToggle from "../components/shared/ThemeToggle";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import darkTheme from "../theme/darkTheme";
import lightTheme from "../theme/lightTheme";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(darkTheme);

  const getTheme = (isDark) => {
    return isDark ? darkTheme : lightTheme;
  };

  const toggleTheme = () => {
    const isDark = !theme.isDark;
    window.localStorage.setItem("useDarkTheme", isDark);
    setTheme(getTheme(isDark));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("useDarkTheme");
    localTheme && setTheme(getTheme(localTheme === "true"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeToggle toggleTheme={() => toggleTheme()} />
      <HomeButton />

      <Search />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
