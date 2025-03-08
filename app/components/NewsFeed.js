'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './NewsFeed.module.css';

import MainNav from './MainNav'
import SideNav from './SideNav'
import NewsStory from './NewsStory'
import SideStory from './SideStory'
import LatestStory from './LatestStory'

import { CATEGORIES } from '../utils/categories';


export default function NewsFeed({ posts }) {
    const [categoryIsActive, setCategoryIsActive] = useState('Latest');

    const similarCategories = categoryIsActive == 'Latest' ? Object.keys(CATEGORIES) : CATEGORIES.categoryIsActive

    let similarPosts = [];

    similarCategories.forEach((c) => similarPosts.push(posts.filter((post) => post.category.includes(c))))

    const latestPosts = posts.sort((a, b) => new Date(a.newsTime) - new Date(b.newsTime))

    console.log(latestPosts);

    const presentDate = Date.now();
    return (
        <div>
            <MainNav onCategoryChange={setCategoryIsActive} />
            <SideNav />
            <div className={styles.newscontainer}>
                <LatestStory />
                <div className={styles.newsarea}>
                    <div className={styles.newsstories}>
                        {posts.map((post) =>
                            <Link href={`/${post.slug}`} key={post.slug}>
                                <NewsStory source={post.sourceName} title={post.title} time={Math.floor((presentDate - new Date(post.newsTime)) / 3600000)} image={post.newsImage} />
                            </Link>
                        )}
                    </div>
                    <div className={styles.sidestories}>
                        {
                            similarPosts.flat().map((post) =>
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