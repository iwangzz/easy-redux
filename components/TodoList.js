import React, {Component} from 'react'

export default class TodoList extends Component {
    render() {
        console.log(this.props.todos)
        return (
            <ul>
                {this.props.todos.map( (todo, index) => { 
                    return (<li key={index} onClick={() => this.props.onTodoClick(index)}> 
                        <span style={{
                                  textDecoration: todo.completed ? 'line-through' : 'none',
                                  cursor: todo.completed ? 'default' : 'pointer'
                         }}>{todo.text}</span>
                    </li>) 
                })}
            </ul>
        )
    }
}