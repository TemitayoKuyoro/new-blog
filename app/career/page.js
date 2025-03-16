import styles from './page.module.css';

import SideNav from "../components/SideNav"

export default function CareerPage() {
    return (
        <div className={styles.container}>
            <SideNav />
            <div className={styles.career}>
                <h1>Careers</h1>
                <h3>March 16th</h3>
                <h3>Mater</h3>
                <p className={styles.careerinfo}></p>
            </div>
        </div>
    )
}