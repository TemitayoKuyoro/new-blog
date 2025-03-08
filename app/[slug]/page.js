import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';

import styles from './page.module.css';

import SideNav from '../components/SideNav';
import SideStory from '../components/SideStory';

export default async function NewsPage({ params }) {
    const { slug } = await params;
    const file = fs.readFileSync(`../new-blog/app/posts/${slug + '.md'}`, 'utf-8')
    const fileContent = matter(file)
    const frontmatter = {
        title: fileContent.data.title,
        date: fileContent.data.date,
        newsExcerpt: fileContent.data.excerpt,
        newsTime: fileContent.data.newsTime,
        category: fileContent.data.category,
        newsImage: fileContent.data.cover_image,
        sourceName: fileContent.data.source,
        sourceImage: fileContent.data.source_image,
    }

    return (
        <>
            <SideNav />
            <div className={styles.newsarea}>
                <div>
                    <Image className={styles.image} src={frontmatter.newsImage} height={150} width={150} alt={frontmatter.title} />
                    <h3>{frontmatter.sourceName}</h3>
                    <h1>{frontmatter.title}</h1>
                    <h3>{frontmatter.newsTime}</h3>
                    <p>{frontmatter.newsExcerpt}</p>
                </div>
                <SideStory />
            </div>
        </>
    )
}