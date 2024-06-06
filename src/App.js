import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const defaultImage = "https://via.placeholder.com/32x32.png";


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
