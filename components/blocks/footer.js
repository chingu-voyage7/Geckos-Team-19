import ImageLink from '../base_components/imageLink';
import styles from '../../styles/Components/footer.scss';

export default function Footer() {
  const baseClass = "footer";
  const footerText = "Follow us on"
  const links = [
    {
      name: 'github',
      href: 'https://github.com/chingu-voyage7/Geckos-Team-19',
      icon: '/static/github.png',
    }
  ]

  return (
    <footer className={ baseClass }>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className= { baseClass + '__description'}>
        { footerText }
      </div>
      <div className= { baseClass + '__links'}>
        { links.map(el => <ImageLink data={ el } key={ el.href } />)}
      </div>
    </footer>
  )
}