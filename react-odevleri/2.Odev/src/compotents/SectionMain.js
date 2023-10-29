function SenctionMain(props){
    return(
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" id="toggle"  onClick={props.toggleAll}>
            Mark all as complete
            </label>
            <ul className="todo-list">                
                {                   
                    props.toDoItems.map((e,i)=>{
                        return( 
                            <li key={i} className={e.checked===true ? "completed": ""}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" defaultChecked={e.checked===true ? true: false} onClick={props.toggleFunc}/>
                                    <label>{e.title}</label>
                                    <button className="destroy" onClick={props.remove}></button>
                                </div>
                            </li> 
                        )                                      
                    })                                   
                }            
            </ul>
      </section>
    );
}
export default SenctionMain;