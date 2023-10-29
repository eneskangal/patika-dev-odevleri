 
function ToDoAppFooter(props){        
    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                <strong className="mr-6px">{props.toDoItems.length}</strong>                
                gorev var
                </span>
                <ul className="filters">
                <li>
                    <a href="#/" onClick={props.postFunction}>All</a>
                </li>
                <li>
                    <a href="#/" onClick={props.postFunction}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={props.postFunction}>Completed</a>
                </li>
                </ul>               
                {                       
                    props.catchFunction.length>=1 
                    ? 
                    <button className="clear-completed" onClick={props.rastgeleFonksiyon}>Clear completed</button>
                    :
                    <button className="clear-completed d-none">Clear completed</button>
                }
            </footer>                       
        </div>
    );
}
export default ToDoAppFooter;