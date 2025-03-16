'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './NewsFeed.module.css';
import { CATEGORIES_MAP } from '../utils/categories';

import MainNav from './MainNav'
import SideNav from './SideNav'
import NewsStory from './NewsStory'
import SideStory from './SideStory'
import LatestStory from './LatestStory'


export default function NewsFeed({ posts }) {
    const [categoryIsActive, setCategoryIsActive] = useState('Latest');

    const similarCategories = CATEGORIES_MAP.get(categoryIsActive)
    
    const similarPosts = posts.filter((p) => p.category.filter((c) => similarCategories.includes(c)))

    console.log(similarPosts)
    
    const latestPosts = posts.sort((a, b) => new Date(a.newsTime) - new Date(b.newsTime))
    
    const presentDate = Date.now();

    const activePosts = posts.filter((p) => p.category.includes(categoryIsActive))

    
    return (
        <div className={styles.container}>
            <MainNav onCategoryChange={setCategoryIsActive}/>
            <SideNav />
            <div className={styles.newscontainer}>
                <LatestStory />
                <div className={styles.newsarea}>
                    <div className={styles.newsstories}>
                        {activePosts.map((post) =>
                            <Link href={`/${post.slug}`} key={post.slug}>
                                <NewsStory source={post.sourceName} title={post.title} time={Math.floor((presentDate - new Date(post.newsTime)) / 3600000)} image={post.newsImage} />
                            </Link>
                        )}
                    </div>
                    <div className={styles.sidestories}>
                        {
                            similarPosts.map((post) =>
                                <Link href={`/${post.slug}`} key={post.slug}>
                                    <SideStory source={post.sourceName} title={post.title} time={Math.floor((presentDate - new Date(post.newsTime)) / 3600000)} image={post.newsImage} />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}