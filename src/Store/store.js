import { createStore, action } from "easy-peasy";

export default createStore({
    calc: "",
    setCalc: action((state, payload) => {
        state.calc = payload;
    }),
    values: [],
    setValues: action((state, payload) => {
        state.values = payload;
    }),
    result: "",
    setResult: action((state, payload) => {
        state.result = payload;
    }),
    operator: "",
    setOperator: action((state, payload) => {
        state.operator = payload;
    })
});
