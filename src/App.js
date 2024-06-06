import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main";

const user = {
    id: 1,
    name: "Stefano",
    image: "https://github.com/TheLiux.png",
};

export default function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar user={user}/>
                <Main/>
            </div>
        </div>
    );
}
