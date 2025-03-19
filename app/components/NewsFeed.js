'use client';

import { useState } from 'react';
import Link from 'next/link';

import { timeformat} from '../utils/time-format';
import { presentDate } from '../utils/current-time';
import { CATEGORIES_MAP } from '../utils/categories';
import styles from './NewsFeed.module.css';

import MainNav from './MainNav'
import SideNav from './SideNav'
import NewsStory from './NewsStory'
import SideStory from './SideStory'
import LatestStory from './LatestStory'


export default function NewsFeed({ posts }) {
    const [categoryIsActive, setCategoryIsActive] = useState('Latest');

    const similarCategories = CATEGORIES_MAP.get(categoryIsActive)
    
    const similarPosts = posts.filter((p) => p.category.filter((c) => similarCategories.includes(c)))
    
    const latestPosts = posts.sort((a, b) => new Date(a.newsTime) - new Date(b.newsTime))
    
    const activePosts = posts.filter((p) => p.category.includes(categoryIsActive))

    return (
        <div className={styles.container}>
        <MainNav onCategoryChange={setCategoryIsActive}/>
        <hr></hr>
            <SideNav />
            <div className={styles.newscontainer}>
                <LatestStory />
                <div className={styles.newsarea}>
                    <div className={styles.newsstories}>
                        {activePosts.map((post) =>
                            <Link href={`/${post.slug}`} key={post.slug}>
                                <NewsStory source={post.sourceName} title={post.title} time={timeformat(Math.floor((presentDate - new Date(post.newsTime)) / 3600000))} image={post.newsImage} />
                            </Link>
                        )}
                    </div>
                    <div className={styles.sidestories}>
                        {
                            similarPosts.map((post) =>
                                <Link href={`/${post.slug}`} key={post.slug}>
                                    <SideStory source={post.sourceName} title={post.title} time={timeformat(Math.floor((presentDate - new Date(post.newsTime)) / 3600000))} image={post.newsImage} />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}