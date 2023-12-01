
import styles from './HelpBlock.module.css'


const HelpBlock = () => {
    return (
        <div className={styles.helpBlock}>
            <span className={styles.label}>Есть вопросы по лоту?</span>

            <span className={styles.mediaOption}>
                Email:<a
                    href="https://t.me/discoboy1337"
                    className={styles.mediaHref}
                >
                    seller@example.com
                </a>
            </span>
        </div>
    )
}

export default HelpBlock
