import Books from "./components/Books";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <main>
      <h1 className="">Hello world</h1>

      <CreateBook />

      {/* <ErrorBoundary fallback={<p>Error loading books</p>}>
        <Suspense fallback={<p>Loading books...</p>}> */}
      <Books />
      {/* </Suspense>
      </ErrorBoundary> */}
    </main>
  );
}

export default App;
