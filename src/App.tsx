import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        {/* <h1>This is a h1 tag</h1>
        <br />
        <button className="btn-primary">Submit Button</button> <br /> */}
        <div>
          <Button variant="outline" className="w-full">
            Click
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
