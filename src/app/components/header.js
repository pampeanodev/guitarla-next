import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/img/logo.svg" width={300} height={40} alt="logo" priority={true} />

      <nav className={styles.navegacion}>
        <Link href="/">
          Inicio
        </Link>
        <Link href="/nosotros">
          Nosotros
        </Link>
        <Link href="/tienda">
          Tienda
        </Link>
        <Link href="/blog">
          Blog
        </Link>        
      </nav>
    </header>
  )
}

export default Header