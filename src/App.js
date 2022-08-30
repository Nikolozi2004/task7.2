import { useState, useRef } from "react";
import useOutsideClick from './hooks/useOutsideClick'

function App() {
  const ref = useRef()
  const [isModalOpen, setModalOpen] = useState(false);
  useOutsideClick(ref, () => setModalOpen(false));
  return (
    <div>
      {isModalOpen ? (
        <div ref={ref} className='modal'>
          This uses useOutsideclick click outside this div
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}

export default App;
