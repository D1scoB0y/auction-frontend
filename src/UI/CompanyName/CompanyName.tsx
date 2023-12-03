import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './CompanyName.module.css'


const CompanyName = () => {
    return (
        <Link to="/" title="Главная">
            <div className={styles.companyNameBox}>
                <h1 className={styles.companyName}>FotoJäger`s</h1>
                <span className={styles.auctionsWord}>AUCTIONS</span>
            </div>
        </Link>
    )
}

export default memo(CompanyName)
