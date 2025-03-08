import React from "react";
import { useState, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <input 
          type="text" 
          ref={passwordRef} 
          value={password} 
          readOnly 
          className="w-full p-2 mb-3 text-white-600 rounded border"
        />
        <div className="flex items-center space-x-3 mb-3">
          <label>Length:</label>
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            min="4" max="25" 
            className="w-16 p-1 text-white-800 rounded border"
          />
        </div>
        <div className="flex items-center space-x-3 mb-3">
          <input 
            type="checkbox" 
            checked={includeNumbers} 
            onChange={() => setIncludeNumbers(!includeNumbers)}
            id="number-input"
          />
          <label htmlFor="number-input">Include Numbers</label>
        </div>
        <div className="flex items-center space-x-3 mb-3">
          <input 
            type="checkbox" 
            checked={includeSymbols} 
            onChange={() => setIncludeSymbols(!includeSymbols)}
            id="symbol-input"
          />
          <label htmlFor="symbol-input">Include Symbols</label>
        </div>
        <button 
          onClick={generatePassword} 
          className="w-full mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Generate Password
        </button>
        <button 
          onClick={copyToClipboard} 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Copy
        </button>
      </div>
    </div>
  );
}
