import { memo } from 'react'
import styles from './BetaTestingBadge.module.css'


const BetaTestingBadge = () => {
    return (
        <div className={styles.badge}>
            <span className={styles.beta}>Площадка в альфа тесте!</span>

            <div className={styles.supportContainer}>
                <span className={styles.support}>Техническая поддержка:</span>
                <span className={styles.supportEmail}>helpfotojager@gmail.com</span>
            </div>
        </div>
    )
}

export default memo(BetaTestingBadge)
