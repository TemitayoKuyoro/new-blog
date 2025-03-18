import Image from 'next/image';
import Link from 'next/link';
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
        content: fileContent.content
    };

    const filenames = fs.readdirSync('../new-blog/app/posts')

    const otherFilenames = filenames.filter((file) => file !== slug + '.md');

    const otherFileMatter = otherFilenames.map((filename) => {
        const otherFile = fs.readFileSync(`../new-blog/app/posts/${filename}`, 'utf-8');
        const otherFileContent = matter(otherFile)
        return ({
            title: otherFileContent.data.title,
            date: otherFileContent.data.date,
            newsExcerpt: otherFileContent.data.excerpt,
            newsTime: otherFileContent.data.newsTime,
            category: otherFileContent.data.category,
            newsImage: otherFileContent.data.cover_image,
            sourceName: otherFileContent.data.source,
            sourceImage: otherFileContent.data.source_image,
            slug: filename.replace('.md', '')
        })
    })

    return (
        <div className={styles.container}>
            <Link href='/'>
            <button className={styles.back}>Home</button></Link>
            <SideNav />
            <div className={styles.newsarea}>
                <div >
                    <Image className={styles.image} src={frontmatter.newsImage} height={150} width={150} alt={frontmatter.title} />
                    <div className={styles.newsdetails}>
                        <h3>{frontmatter.sourceName}</h3>
                        <h1>{frontmatter.title}</h1>
                        <h3>{frontmatter.newsExcerpt}</h3>
                    </div>
                    <p className={styles.newscontent}>{frontmatter.content}</p>
                </div>
                <div>
                    {
                        otherFileMatter.map((file) =>
                            <Link key={file.slug} href={`/${file.slug}`}>
                                <SideStory source={file.sourceName} title={file.title} time={Math.floor((Date.now() - new Date(file.newsTime)) / 3600000)} image={file.newsImage} />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}