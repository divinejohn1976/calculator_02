import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
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
            <Footer />
        </div>
    );
}

export default App;
