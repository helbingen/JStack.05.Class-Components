import React from "react";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";

class App extends React.Component {
  constructor(props) {
    super(props); //construtor da react.component
    this.state = {
      theme: "dark",
    };
  }
  render() {
    const { theme } = this.state;
    console.log(this.state);
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState((prevState) => ({
              theme: prevState.theme === "dark" ? "light" : "dark",
            }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;
