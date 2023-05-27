import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Button = ({ resultOnEqual, setResultOnEqual }) => {
    const operator = useStoreState((state) => state.operator);
    const setOperator = useStoreActions((action) => action.setOperator);
    const result = useStoreState((state) => state.result);
    const setResult = useStoreActions((action) => action.setResult);
    const calc = useStoreState((state) => state.calc);
    const setCalc = useStoreActions((action) => action.setCalc);

    const handleOp = (left, right, op) => {
        let res = 0;
        if (op) {
            switch (op) {
                case "+":
                    res = left + right;
                    break;
                case "-":
                    res = left - right;
                    break;
                case "*":
                    res = left * right;
                    break;
                case "÷":
                    res = left / right;
                    break;
                default:
                    res = 1;
            }
        }
        return res;
    };

    const handleNumClick = (e) => {
        setResultOnEqual("");
        const nums = calc + e.target.textContent;
        setCalc(nums);
    };

    const handleAc = () => {
        setResult("");
        setCalc("");
        setOperator("");
        setResultOnEqual("");
    };

    const handleDelete = () => {
        if (!calc && resultOnEqual) handleAc();
        const newString = calc.slice(0, calc.length - 1);
        setCalc(newString);
    };

    const handleDecimal = () => {
        if (calc.split(".").length !== 1) return;
        const res = calc ? calc + "." : "0.";
        setCalc(res);
    };

    const handleAdd = () => {
        let leftOperand = 0;
        let rightOperand = 0;
        let sum = 0;
        if (resultOnEqual && typeof resultOnEqual === "string") {
            setResult(resultOnEqual);

            if (resultOnEqual.split(".").length === 1) {
                leftOperand = Number.parseInt(resultOnEqual);
                setResultOnEqual("");
            } else {
                leftOperand = Number.parseFloat(resultOnEqual);
                setResultOnEqual("");
            }
        } else if (result) {
            if (result.split(".").length === 1) {
                leftOperand = Number.parseInt(result);
            } else {
                leftOperand = Number.parseFloat(result);
            }
        } else {
            leftOperand = 0;
        }
        if (calc) {
            if (calc.split(".").length === 1) {
                rightOperand = Number.parseInt(calc);
            } else {
                rightOperand = Number.parseFloat(calc);
            }
        } else {
            rightOperand = 0;
        }

        if (operator) {
            sum = handleOp(leftOperand, rightOperand, operator);
        } else {
            sum = leftOperand + rightOperand;
        }

        setResult(sum.toString());
        setOperator("+");
        setResultOnEqual("");
        setCalc("");
    };

    const handleSubtract = () => {
        let leftOperand = 0;
        let rightOperand = 0;
        let difference = 0;

        if (calc) {
            if (calc.split(".").length === 1) {
                rightOperand = Number.parseInt(calc);
            } else {
                rightOperand = Number.parseFloat(calc);
            }
        } else {
            rightOperand = 0;
        }

        if (resultOnEqual && typeof resultOnEqual === "string") {
            setResult(resultOnEqual);

            if (resultOnEqual.split(".").length === 1) {
                leftOperand = Number.parseInt(resultOnEqual);
                setResultOnEqual("");
            } else {
                leftOperand = Number.parseFloat(resultOnEqual);
                setResultOnEqual("");
            }
        } else if (result) {
            if (result.split(".").length === 1) {
                leftOperand = Number.parseInt(result);
            } else {
                leftOperand = Number.parseFloat(result);
            }
        } else {
            leftOperand = rightOperand + rightOperand;
        }

        if (operator) {
            difference = handleOp(leftOperand, rightOperand, operator);
        } else {
            difference = leftOperand - rightOperand;
        }

        setResult(difference.toString());
        setOperator("-");
        setResultOnEqual("");

        setCalc("");
    };

    const handleMultiply = () => {
        let leftOperand = 0;
        let rightOperand = 0;
        let times = 0;

        if (calc) {
            if (calc.split(".").length === 1) {
                rightOperand = Number.parseInt(calc);
            } else {
                rightOperand = Number.parseFloat(calc);
            }
        } else {
            rightOperand = 1;
        }

        if (resultOnEqual && typeof resultOnEqual === "string") {
            setResult(resultOnEqual);

            if (resultOnEqual.split(".").length === 1) {
                leftOperand = Number.parseInt(resultOnEqual);
                setResultOnEqual("");
            } else {
                leftOperand = Number.parseFloat(resultOnEqual);
                setResultOnEqual("");
            }
        } else if (result) {
            if (result.split(".").length === 1) {
                leftOperand = Number.parseInt(result);
            } else {
                leftOperand = Number.parseFloat(result);
            }
        } else {
            leftOperand = 1;
        }

        if (operator) {
            times = handleOp(leftOperand, rightOperand, operator);
        } else {
            times = leftOperand * rightOperand;
        }

        setResult(times.toString());
        setOperator("*");
        setResultOnEqual("");

        setCalc("");
    };

    const handleDivide = () => {
        let leftOperand = 0;
        let rightOperand = 0;
        let divide = 0;

        if (calc) {
            if (calc.split(".").length === 1) {
                rightOperand = Number.parseInt(calc);
            } else {
                rightOperand = Number.parseFloat(calc);
            }
        } else {
            rightOperand = 1;
        }

        if (resultOnEqual && typeof resultOnEqual === "string") {
            setResult(resultOnEqual);

            if (resultOnEqual.split(".").length === 1) {
                leftOperand = Number.parseInt(resultOnEqual);
                setResultOnEqual("");
            } else {
                leftOperand = Number.parseFloat(resultOnEqual);
                setResultOnEqual("");
            }
        } else if (result) {
            if (result.split(".").length === 1) {
                leftOperand = Number.parseInt(result);
            } else {
                leftOperand = Number.parseFloat(result);
            }
        } else {
            leftOperand = rightOperand * rightOperand;
        }

        if (operator) {
            divide = handleOp(leftOperand, rightOperand, operator);
        } else {
            divide = leftOperand / rightOperand;
        }

        setResult(divide.toString());
        setOperator("÷");
        setResultOnEqual("");

        setCalc("");
    };

    const handleEqual = () => {
        if (!operator) return;
        let leftOperand = 0;
        let rightOperand = 0;
        let value = 0;
        if (result) {
            if (result.split(".").length === 1) {
                leftOperand = Number.parseInt(result);
            } else {
                leftOperand = Number.parseFloat(result);
            }
        }
        if (calc) {
            if (calc.split(".").length === 1) {
                rightOperand = Number.parseInt(calc);
            } else {
                rightOperand = Number.parseFloat(calc);
            }
        } else {
            rightOperand = 0;
        }

        if (operator) {
            value = handleOp(leftOperand, rightOperand, operator);
        } else if (!operator && result) {
            value = result;
        }
        setResultOnEqual(value.toString());
        setResult(value.toString());
        setCalc("");
        setOperator("");
    };

    return (
        <section className="btnContainer">
            <button
                onClick={handleAc}
                className="btn ac number"
            >
                AC
            </button>
            <button
                onClick={handleNumClick}
                className="btn seven number"
            >
                7
            </button>
            <button
                onClick={handleNumClick}
                className="btn eight number"
            >
                8
            </button>
            <button
                onClick={handleNumClick}
                className="btn nine number"
            >
                9
            </button>
            <button
                onClick={handleDelete}
                className="btn delete"
            >
                DEL
            </button>
            <button
                onClick={handleNumClick}
                className="btn four number"
            >
                4
            </button>
            <button
                onClick={handleNumClick}
                className="btn five number"
            >
                5
            </button>
            <button
                onClick={handleNumClick}
                className="btn six number"
            >
                6
            </button>
            <button
                onClick={handleDivide}
                className="btn divide operator"
            >
                ÷
            </button>
            <button
                onClick={handleMultiply}
                className="btn times operator"
            >
                *
            </button>
            <button
                onClick={handleNumClick}
                className="btn one number"
            >
                1
            </button>
            <button
                onClick={handleNumClick}
                className="btn two number"
            >
                2
            </button>
            <button
                onClick={handleNumClick}
                className="btn three number"
            >
                3
            </button>
            <button
                onClick={handleSubtract}
                className="btn minus operator"
            >
                -
            </button>
            <button
                onClick={handleDecimal}
                className="btn dot"
            >
                .
            </button>
            <button
                onClick={handleNumClick}
                className="btn zero number"
            >
                0
            </button>
            <button
                onClick={handleEqual}
                className="btn equal"
            >
                =
            </button>
            <button
                onClick={handleAdd}
                className="btn plus operator"
            >
                +
            </button>
        </section>
    );
};

export default Button;
