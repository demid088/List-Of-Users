import css from './Success.module.scss'

function Success({ count, OnClickBack }) {
  return (
    <div className={css.success}>
      <span className='material-icons-outlined'>done</span>
      <h3 className={css.title}>Успешно!</h3>
      <p className={css.msg}>
        Всем <span>{count}</span> пользователям отправлено приглашение.
      </p>
      <button className={css.btn} onClick={OnClickBack}>
        Назад
      </button>
    </div>
  )
}

export default Success
