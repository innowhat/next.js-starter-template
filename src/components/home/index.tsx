const HomeView = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">NextJS Starter Template </h1>
      <p className="mt-3 text-2xl">
        Scalable, maintainable with focus on simplicity and best practices.
        <br />
        Pre-configured with the following
      </p>
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a
          href="https://www.typescriptlang.org"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Typescript &rarr;</h3>
          <p>TypeScript is JavaScript with syntax for typesI.</p>
        </a>
        <a
          href="https://jestjs.io"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Jest &rarr;</h3>
          <p>For unit and component testing experience</p>
        </a>

        <a
          href="https://www.cypress.io/"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Cypress &rarr;</h3>
          <p>For complete end-to-end testing experience</p>
        </a>

        <a
          href="https://typicode.github.io/husky"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Husky &rarr;</h3>
          <p>Husky improves your commits and more 🐶 woof!</p>
        </a>
      </div>
    </>
  )
}

export default HomeView
