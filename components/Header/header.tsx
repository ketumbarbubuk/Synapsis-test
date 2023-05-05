import Link from 'next/link'
import styles from './header.module.css'
export default function Header() {
    return (
      <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href="/">Home</Link></li>
          <li className={styles.item}><Link href="users/detail">Users</Link></li>
          <li className={styles.item}><Link href="blog">Blog</Link></li>
        </ul>
      </header>
      </>
    )
}