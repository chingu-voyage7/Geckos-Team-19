import styles from '../../styles/Components/header.scss';

export default function () {
  const baseClass = "header";
  const content = {
    header: process.env.PROJECT_NAME,
    description: "We'll Find You The Perfect Volunteers For Your Web App Non-profit Projects",
    image: '/static/header_image.jpg',
  }

  return (
    <div className = { baseClass } style = {{ backgroundImage: `url(${ content.image })` }}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <h1>{ content.header }</h1>
      <p>{ content.description }</p>
    </div>
  )
}
