import Link from "next/link";

export default ({ children, title }) => (
  <div>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/developer"><a>Developer</a></Link>
      <Link href="/organisation"><a>Organisation</a></Link>
      <Link href="/project"><a>Project</a></Link>
      <Link href="/team"><a>Team</a></Link>
    </header>
    <h1>{ title }</h1>
    { children }
    <footer>Footer</footer>
  </div>
)