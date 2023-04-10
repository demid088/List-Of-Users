import css from './User.module.scss'

// список пользователей: https://reqres.in/api/users

function User({ id, email, first_name, last_name, avatar, OnClickInvite, isInvited }) {
  return (
    <li className={css.item}>
      <div>
        <img className={css.avatar} src={avatar} alt={last_name} />
        <div>
          <h3 className={css.title}>
            {first_name} {last_name}
          </h3>
          <p className={css.mail}>
            <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
              <path d='M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z' />
            </svg>
            {email}
          </p>
        </div>
      </div>
      <span
        className={'material-icons-outlined ' + css.action}
        onClick={() => OnClickInvite(id)}
      >
        {isInvited ? 'remove' : 'add'}
      </span>
    </li>
  )
}

export default User
