
import { RandomPassword } from "./utilitys/PasswordGenerator";

let pwd = new RandomPassword();





function generatePwd() {
  const { upperCase, lowerCase, numeric, symbol, length } = this.state;
  let pwd = new RandomPassword()
    .setLength(length)
    .setLowerCase(lowerCase)
    .setUpperCase(upperCase)
    .setNumberCase(numeric)
    .setSymbol(symbol)
    .generate();
  this.setState({ pwd });
}

function App() {
  return null;
  window.print(pwd);
  
  
}

export default App;
