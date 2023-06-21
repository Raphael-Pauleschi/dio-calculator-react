import { Container, Content } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  return (
    <Container className="App">
      
      <Content> 
        <Input/>
        <Button/>
        <br/>
      Eu sou... O react js
      </Content>
    </Container>
  );
};

export default App;
