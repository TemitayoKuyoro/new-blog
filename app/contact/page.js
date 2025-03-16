import SideNav from "../components/SideNav"

import styles from './page.module.css'

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <SideNav />
            <div className={styles.about}>
                <div className={styles.aboutdetails}>
                    <h1>Contact us</h1>
                    <h3>March 16th</h3>
                    <h3>Sun</h3>
                    <p className={styles.aboutinfo}></p>
                </div>
            </div>
        </div>
    )
}