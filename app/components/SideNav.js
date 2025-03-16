'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import styles from './SideNav.module.css'

export default function SideNav() {
    const [sideOpen, setSideOpen] = useState(false);
    return (
        <div className={sideOpen ? styles.sidenavopen : styles.sidenavclosed}>
            <div>{sideOpen ? <button className={styles.sidenavbuttonclose} onClick={() => setSideOpen(false)}>
                <Image src="/arrow-left.svg" width={20} height={20} alt="close menu" />
            </button> :
                <button className={styles.sidenavbuttonopen} onClick={() => setSideOpen(true)} >
                    <Image src="/align-left.svg" width={20} height={20} alt="open menu" />
                </button>
            }
            </div>
            <div className={styles.sidenavgrid}>
                <Link href='/about'><div><p>About us</p></div></Link>
               <Link href='/contact'><div><p>Contact us</p></div></Link>
                <Link href='/career'><div><p>Careers</p></div></Link>
            </div>
        </div>
    )
}