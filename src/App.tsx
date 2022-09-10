import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";

function App() {
  const [name, setName] = useState<string>("");
  const [attributes, setAttributes] = useState<string[]>([]);

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleAttributesChange = (newAttributes: string) => {
    const attributesList = newAttributes.split(",");
    setAttributes(attributesList);
  };

  return (
    <div className="App">
      <div className="absolute bg-gray-200 w-full h-full overflow-y-auto">
        <Header nameApp="Python Class Generator" />
        <Main />
        <Footer text="By Douglas Silva. All rights reserved." />
      </div>
    </div>
  );
}

export default App;
