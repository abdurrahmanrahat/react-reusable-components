import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    if (true) {
      handleModalClose();
    }
  };

  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div>
          <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>
            {/* Modal header */}
            <Modal.Header>
              <h3>Modal Title</h3>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>

            {/* Modal content */}
            <form onSubmit={handleSubmit}>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default App;
