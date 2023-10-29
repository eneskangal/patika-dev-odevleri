function Header(props){
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={props.postToDoElement}>
              <input className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}
export default Header