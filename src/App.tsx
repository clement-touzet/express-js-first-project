import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import Providers from "./providers/Providers";

function App() {
  return (
    <main>
      <Providers>
        <h1 className="">Hello world</h1>

        <CreateBook />

        {/* <ErrorBoundary fallback={<p>Error loading books</p>}>
        <Suspense fallback={<p>Loading books...</p>}> */}
        <Books />
        {/* </Suspense>
      </ErrorBoundary> */}
      </Providers>
    </main>
  );
}

export default App;
