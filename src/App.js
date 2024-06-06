import logo from './logo.svg';
import './App.css';

function AppTitle() {
    return <h1>Todo app</h1>;
}

function AppMessage() {
    return <p>Sium</p>;
}


function App() {
    return (<div>
        <AppTitle/>
        <AppMessage/>
    </div>);
}

export default App;
