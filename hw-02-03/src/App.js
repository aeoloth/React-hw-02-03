import React from "react";
import "./App.css";

function Sum(props) {
  return (
    <h1>
      Сумма {props.m} первых натуральных чисел равна{" "}
      {(props.m * (props.m + 1)) / 2}{" "}
    </h1>
  );
}

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { n: "3" };
  }

  handleChange(e) {
    this.setState({ n: e.target.value });
  }

  render() {
    const n = this.state.n;
    return (
      <fieldset>
        <legend>Введите количество слагаемых первых натуральных чисел:</legend>
        <input value={n} onChange={this.handleChange} />
        <Sum m={parseFloat(n)} />
      </fieldset>
    );
  }
}

export default Calc;
