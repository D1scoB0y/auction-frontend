import styles from './HelpBlock.module.css'
import CopyText from '../../../../UI/CopyText/CopyText'


const HelpBlock = () => {
    return (
        <div className={styles.helpBlock}>
            <span className={styles.label}>Есть вопросы по лоту?</span>

            <div className={styles.emailContainer}>
                <img
                    src="/gmail.png"
                    alt="Email icon"
                    className={styles.emailIcon}
                />

                <CopyText
                    textToCopy='sashink@list.ru'
                    className={styles.email}
                >
                    sashink@list.ru
                </CopyText>
            </div>
        </div>
    )
}

export default HelpBlock
