import User from "./User";
import ListNames from "./ListNames";
import Col from "../Col";

const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0,0,0,0.1)"
}
export default function Sidebar({user: {id, name, image}}) {
    return (
        <Col size={3} className="bg-light" style={customStyle}>
            <p>
                <User name={name} image={image}/>
            </p>
            <hr/>
            <ListNames/>
        </Col>
    );
}