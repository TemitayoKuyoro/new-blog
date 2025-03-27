'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import styles from './SideNav.module.css'

export default function SideNav() {
    const [sideOpen, setSideOpen] = useState(false);
    return (
        <div className={`${styles.sidenav} ${sideOpen ? styles.sidenavopen : styles.sidenavclosed}`}>
            <div className={styles.sidenavbutton}>
                <button onClick={() => setSideOpen(!sideOpen)}>
                    <Image src={sideOpen ? '/arrow-left.svg' : '/align-left.svg'} width={20} height={20} alt={sideOpen ? 'close menu' : 'open menu'} />
                </button>
            </div>
            <div className={styles.sidenavgrid}>
                <Link href='/about'><div><p>About us</p></div></Link>
                <Link href='/contact'><div><p>Contact us</p></div></Link>
                <Link href='/career'><div><p>Careers</p></div></Link>
            </div>
        </div>
    )
}