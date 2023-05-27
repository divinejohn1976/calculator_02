import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [resultOnEqual, setResultOnEqual] = useState("");

    return (
        <DataContext.Provider
            value={{
                resultOnEqual,
                setResultOnEqual
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
