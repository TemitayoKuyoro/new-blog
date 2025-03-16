import SideNav from "../components/SideNav"

import styles from './page.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <SideNav />
            <div className={styles.about}>
                <h1>About us</h1>
                <h3>March 10th</h3>
                <h3>Sun</h3>
                <p className={styles.aboutinfo}></p>
            </div>
        </div>
    )
}