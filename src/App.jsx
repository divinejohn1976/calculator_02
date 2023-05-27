import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
function App() {
    const [resultOnEqual, setResultOnEqual] = useState("");
    return (
        <div className="App">
            <main className="main">
                <Header resultOnEqual={resultOnEqual} />
                <Button
                    setResultOnEqual={setResultOnEqual}
                    resultOnEqual={setResultOnEqual}
                />
            </main>
        </div>
    );
}

export default App;
