// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails
  const onDeleteUser = () => {
    deleteUser(id)
  }
  return (
    <li className="Todo-item">
      <p>{title}</p>
      <button type="button" className="btn" onClick={onDeleteUser}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
