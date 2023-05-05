import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import UsersPage from '@/components/Body/formbody'
import Footer from '@/components/Footer/footer'

 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1 className={styles.title}>Users Information Page</h1>
    <UsersPage></UsersPage>

    <Footer></Footer>
    </>
  )
}
