import { useState, useEffect } from "react"
import UserPlaceholder from "../User/UserPlaceholder"
import User from "../User/User"

import css from './Users.module.scss'

// список пользователей: https://reqres.in/api/users

function Users({ searchValue, invites, OnClickInvite }) {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((data) => data.json())
      .then((json) => {
        setUsers(json.data)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка загрузки данных пользователей!')
      })
      .finally(() => setLoading(false))
  }, [])

  return isLoading ? (
    <UserPlaceholder />
  ) : (
    <ul className={css.list}>
      {users
        .filter((item) => {
          const fullname =
            item.first_name.toLowerCase().replaceAll(' ', '') +
            item.last_name.toLowerCase().replaceAll(' ', '')

          const email = item.email.toLowerCase().replaceAll(' ', '')

          return (
            fullname.includes(searchValue.toLowerCase().replaceAll(' ', '')) ||
            email.includes(searchValue.toLowerCase().replaceAll(' ', ''))
          )
        })
        .map((user) => (
          <User
            key={user.id}
            {...user}
            OnClickInvite={OnClickInvite}
            isInvited={invites.includes(user.id)}
          />
        ))}
    </ul>
  )
}

export default Users