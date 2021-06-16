import "./App.css";
import PostForm from "./components/PostForm";

function App() {
    return (
        <div className="App">
            <PostForm url="https://jsonplaceholder.typicode.com/posts" />
        </div>
    );
}

export default App;
