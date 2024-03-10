import "./App.css";
import AuthorForm from "./AuthorForm/AuthorForm";
import RetrieveUsers from "./RetrieveUsers/RetrieveUsers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthorForm />
        <div>
          <RetrieveUsers />
        </div>
      </header>
    </div>
  );
}

export default App;
