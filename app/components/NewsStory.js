import Image from 'next/image';
import styles from './NewsStory.module.css';

export default function NewsStory({source, title, time, image}) {
    return (
        <div className={styles.news}>
            <Image src={image} alt={title} width={80} height={80}/>
            <div className={styles.newsdetails}>
                <span>{source}</span>
                <span>{title}</span>
                <span>{time}</span>
            </div>
        </div>
    )
}