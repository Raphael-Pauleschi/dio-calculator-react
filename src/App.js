import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");

  const handleDoClear = () => {
    setCurrentNumber("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (!checkFirstNumberIsZero()) {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleDivNumbers = () => {
    if (!checkFirstNumberIsZero()) {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
    }
  };

  const handleMulNumbers = () => {
    if (!checkFirstNumberIsZero()) {
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mul));
    }
  };

  const handleSubNumbers = () => {
    if (!checkFirstNumberIsZero()) {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
    }
  };

  const checkFirstNumberIsZero = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      handleDoClear();
      return true;
    }
    return false;
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" />
          <Button label="C" onClick={() => handleDoClear()} />
          <Button label="/" onClick={() => handleDivNumbers()} />
          <Button label="*" onClick={() => handleMulNumbers()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleSubNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
