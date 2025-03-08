import styles from './MainNav.module.css';

export default function MainNav({ onCategoryChange }) {
    return (
        <div className={styles.nav}>
            <button onClick={() => onCategoryChange('Latest')}>
                <span>
                    Latest</span>
            </button>
            <button onClick={() => onCategoryChange('Nigeria')}>
                <span>
                    Nigeria</span>
            </button>
            <button onClick={() => onCategoryChange('World')}>
                <span>
                    World</span>
            </button>
            <button onClick={() => onCategoryChange('Business')}>
                <span>
                    Business</span>
            </button>
            <button onClick={() => onCategoryChange('Technology')}>
                <span>
                    Technology</span>
            </button>
            <button onClick={() => onCategoryChange('Entertainment')}>
                <span>
                    Entertainment</span>
            </button>
            <button onClick={() => onCategoryChange('Sports')}>
                <span>
                    Sports</span>
            </button>
            <button onClick={() => onCategoryChange('Science')}>
                <span>
                    Science</span>
            </button>
            <button onClick={() => onCategoryChange('Health')}>
                <span>
                    Health</span>
            </button>
        </div>
    )
}