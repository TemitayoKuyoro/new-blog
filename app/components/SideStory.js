import Image from 'next/image'

import styles from './SideStory.module.css'

export default function SideStory({source, title, time, image}) {
  return (
    <div className={styles.news}>
      <Image height={80} width={80} src={image} alt={title}/>
      <div className={styles.newsdetails}>
        <span>{source}</span>
        <span>{title}</span>
        <span>{`${time}hrs`}</span>
      </div>
    </div>
  )
}