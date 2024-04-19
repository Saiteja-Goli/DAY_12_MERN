import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}

export default App
