export default function ImageLink(props) {
  return (
      <a href={ props.data.href } key={ props.data.href }>
        <img src={ props.data.icon } />
      </a>
  )
}