import styles from './home.module.css'

const HomeView = () => {
  return (
    <div>
      <h1 className={styles.title}>NextJS Starter Template </h1>
      <p className={styles.description}>
        Scalable, maintainable with focus on simplicity and best practices.
        <br />
        Pre-configured with the following
      </p>
      <div className={styles.grid}>
        <a href="https://www.typescriptlang.org" className={styles.card}>
          <h3>Typescript &rarr;</h3>
          <p>TypeScript is JavaScript with syntax for typesI.</p>
        </a>

        <a href="https://jestjs.io" className={styles.card}>
          <h3>Jest &rarr;</h3>
          <p>For unit and component testing experience</p>
        </a>

        <a href="https://www.cypress.io/" className={styles.card}>
          <h3>Cypress &rarr;</h3>
          <p>For complete end-to-end testing experience</p>
        </a>

        <a href="https://typicode.github.io/husky" className={styles.card}>
          <h3>Husky &rarr;</h3>
          <p>Husky improves your commits and more 🐶 woof!</p>
        </a>
      </div>
    </div>
  )
}

export default HomeView
