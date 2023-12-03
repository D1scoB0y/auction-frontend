import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Line from '../../../../UI/Line/Line'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerFooter}>
                <div className={styles.footerSections}>
                    <Link
                        to="/"
                        className={styles.footerSection}
                    >
                        Главная
                    </Link>

                    <Link
                        to="/how-it-works"
                        className={styles.footerSection}
                    >
                        Как это работает?
                    </Link>

                    <Link
                        to="/privacy-policy"
                        className={styles.footerSection}
                    >
                        Политика конфиденциальности
                    </Link>

                    <Line />

                    <div className={styles.supportCopyContainer}>
                        <div className={styles.supportContainer}>
                            <span className={styles.support}>Техподдержка:</span>
                            <span className={styles.supportEmail}>helpfotojager@gmail.com</span>
                        </div>
                        <span className={styles.copyright}>© 2023</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
