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
                    textToCopy='seller@example.com'
                    className={styles.email}
                >
                    seller@example.com
                </CopyText>
            </div>

            
        </div>
    )
}

export default HelpBlock
