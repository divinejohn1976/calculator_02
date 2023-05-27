import React from "react";

import { useStoreState } from "easy-peasy";
import { setComa } from "./util/util";

const Display = ({ resultOnEqual }) => {
    const calc = useStoreState((state) => state.calc);
    const result = useStoreState((state) => state.result);
    const operator = useStoreState((store) => store.operator);

    const showResult = setComa(result);
    const showCalc = setComa(calc);
    const showResultOnEqual = setComa(resultOnEqual);

    return (
        <section className="Display">
            {resultOnEqual ? (
                <div
                    style={{
                        fontSize:
                            resultOnEqual.length < 10
                                ? "3rem"
                                : resultOnEqual.length < 15
                                ? "2rem"
                                : resultOnEqual.length > 20
                                ? "2rem"
                                : "3rem"
                    }}
                    className="finalResult"
                >
                    {showResultOnEqual}
                </div>
            ) : (
                <>
                    <div className="result">{showResult}</div>
                    <span className="operator">{operator}</span>
                    <div className="calc">{showCalc}</div>
                </>
            )}
        </section>
    );
};

export default Display;
