import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo } from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
    render() {
        const { dispatch, visibleTodos} = this.props
        return ( 
            <div>
                <AddTodo onAddClick = {text => dispatch(addTodo(text))}/>
                <TodoList todos={visibleTodos} onTodoClick={index =>
            dispatch(completeTodo(index))}/>
                <Footer />
            </div>
        )
    }
}

App.PropTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

function select(state) {
  return {
    visibleTodos: state.todos,
  }
}

export default connect(select)(App)