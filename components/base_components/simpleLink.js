import Link from "next/link";

function SimpleLink(props) {

  return (
    <Link href= { props.data.href } key={ props.data.href }>
      <a>
        { props.data.text }
      </a>
    </Link>
  )
}

export default SimpleLink;