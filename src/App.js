import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import themes from "./styles/themes";

class App extends React.Component {
  componentDidMount() {
    //mesma função do UseEffect dos componentes funcionais
  }

  componentDidUpdate(prevProps, prevState) {
    //bom para saber se o valor de um estado ou de props teve alteração para executar algo em seguida
    // é executado depois do método render
    console.log({
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {
    //método é executado sempre que der erro em algum outro componente do App
  }

  shouldComponentUpdate(nextProps, nextState) {
    //executa antes do render()
    console.log({
      currentState: this.state,
      nextState,
      nextProps,
    });
    return true; //define se o método render deve ser executado ou não
  }

  componentWillUnmount() {
    //executado assim que o componente sair da tela
  }

  render() {
    console.log("rendered");
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
