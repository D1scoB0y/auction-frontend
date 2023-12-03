import styles from './Agreement.module.css'
import { Link } from 'react-router-dom'


const Agreement = () => {
    return (
        <div className={styles.agreement}>
            <span
                className={styles.text}
            >
                Создавая аккаунт, вы даете согласие на обработку персональных данных.
            </span>
            <Link
                to="/privacy-policy"
                className={styles.details}   
            >
                Подробнее
            </Link>
        </div>
    )
}

export default Agreement