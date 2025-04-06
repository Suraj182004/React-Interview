import { useRef, useEffect } from 'react';

function InputFocusExample() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus input on page load
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">🔍 useRef Input Focus</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="border p-2 rounded"
      />
    </div>
  );
}

export default InputFocusExample;
