import { memo } from 'react'
import styles from './BetaTestingBadge.module.css'
import CopyText from '../CopyText/CopyText'


const BetaTestingBadge = () => {
    return (
        <div className={styles.badge}>
            <span className={styles.beta}>Площадка в альфа тесте</span>

            <div className={styles.supportContainer}>
                <span className={styles.support}>Техническая поддержка:</span>
                <CopyText
                    textToCopy='helpfotojager@gmail.com'
                    className={styles.supportEmail}
                >
                    helpfotojager@gmail.com
                </CopyText>
            </div>
        </div>
    )
}

export default memo(BetaTestingBadge)
