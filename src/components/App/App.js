import { Fragment, useState } from 'react'
import Users from '../Users/Users'
import Success from './../Success/Success';

import css from './App.module.scss'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)

  function OnChangeSearchValue(event) {
    setSearchValue(event.target.value)
  }

  function OnClickInvite(id) {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  function OnClickSendInvite() {
    setSuccess(true)
  }

  function OnClickBack() {
    setSuccess(false)
  }
  
  function OnClickReset() {
    setInvites([])
  }

  return (
    <div className={css.App}>
      {success ? (
        <Success count={invites.length} OnClickBack={OnClickBack} />
      ) : (
        <Fragment>
          <div className={css.search}>
            <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
            </svg>
            <input
              value={searchValue}
              onChange={OnChangeSearchValue}
              type='text'
              placeholder='Поиск...'
            />
          </div>
          <div className={css.users}>
            <Users
              searchValue={searchValue}
              invites={invites}
              OnClickInvite={OnClickInvite}
            />
          </div>
          <div
            className={
              css.btn +
              ' ' +
              css.btnReset +
              ' ' +
              (invites.length > 0 ? css.active : '')
            }
            onClick={OnClickReset}
          >
            Сбросить
          </div>
          <div
            className={css.btn + ' ' + (invites.length > 0 ? css.active : '')}
            onClick={OnClickSendInvite}
          >
            Отправить приглашение
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default App
