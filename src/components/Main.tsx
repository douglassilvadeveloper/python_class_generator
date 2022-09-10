import { useState } from "react";
import { buildList } from "../helpers/buildList";
import TextInput from "./TextInput";

function Main() {
  const [name, setName] = useState<string>("");
  const [attributes, setAttributes] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleAttributesChange = (newAttributes: string) => {
    setAttributes(newAttributes);
    const attributeList = buildList(newAttributes);
    setResult(attributeList);
  };

  const handleClean = () => {
    setName("");
    setAttributes("");
    setResult([]);
  };

  return (
    <main>
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-col items-start lg:items-start justify-between pb-4 border-b border-gray-300">
        <TextInput
          autoFocus={true}
          id="className"
          name="className"
          labelDescription="Enter the class name:"
          inputTextValue={name}
          onTextChange={handleNameChange}
          placeholder="Exemple: Person"
        />
        <TextInput
          id="attributes"
          name="attributes"
          labelDescription="Enter the attribute names (comma separated):"
          inputTextValue={attributes}
          onTextChange={handleAttributesChange}
          placeholder="Exemple: first_name, last_name"
        />
        <div className="mt-6 lg:mt-0">
          <button
            onClick={() => handleClean()}
            className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          >
            Clean
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="rounded block p-2.5 w-full bg-white text-gray-700 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-auto">
          <>
            {name ? <p>class {name}:</p> : <p></p>}
            {result.length > 0 ? (
              <p>
                {"\u00a0".repeat(3)} def __init__(self, {result.join(", ")}
                ):
              </p>
            ) : (
              <p></p>
            )}
            {result.length > 0 ? (
              result.map((a) => (
                <span key={a}>
                  {"\u00a0".repeat(7)} self.__{a} = {a}
                  <br />
                </span>
              ))
            ) : (
              <p></p>
            )}
            <br />
            {result.length > 0 ? (
              result.map((a) => (
                <p key={a}>
                  {"\u00a0".repeat(3)} @property
                  <br />
                  {"\u00a0".repeat(3)} def {a}(self):
                  <br />
                  {"\u00a0".repeat(7)} return self.__{a}
                  <br />
                  <br />
                </p>
              ))
            ) : (
              <p></p>
            )}
            {result.length > 0 ? (
              <p>
                {"\u00a0".repeat(3)} def __str__(self):
                <br />
                {"\u00a0".repeat(7)} return{" "}
                {`f'{self.${result.join("} {self.")}}'`}
                <br />
                <br />
              </p>
            ) : (
              <p></p>
            )}
          </>
        </div>
      </div>
    </main>
  );
}

export default Main;
