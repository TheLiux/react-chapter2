import Col from "./Col";
import TodoList from "./TodoList/TodoList";

export default function Main(props) {
    return (
        <Col size={9}>
            <TodoList/>
        </Col>
    );
}