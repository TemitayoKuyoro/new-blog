import fs from 'fs';
import matter from 'gray-matter';
import Image from "next/image";
import styles from "./page.module.css";

import NewsFeed from './components/NewsFeed';

export default function Home() {

  const filenames = fs.readdirSync('./app/posts')
  console.log(filenames)
  const files = filenames.map((filename) => {
    const file = fs.readFileSync(`./app/posts/${filename}`, 'utf-8')
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

    return ({
      ...frontmatter,
      slug: filename.replace('.md', '')
    })
  })
  // console.log(files)


  return (
    <>
      <NewsFeed posts={files} />
    </>
  );
} 
