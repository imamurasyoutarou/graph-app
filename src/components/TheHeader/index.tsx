import styles from '@/components/TheHeader/style.module.css'

export const TheHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>都道府県グラフ</li>
        </ul>
      </nav>
    </header>
  )
}
