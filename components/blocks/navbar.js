import SimpleLink from '../base_components/simpleLink';
import styles from '../../styles/Components/navbar.scss';

export default function Navbar() {
  const baseClass = "navbar";
  const imgUrl = "https://www.freelogodesign.org/Content/img/slide-logo-1.png";
  const bgImage = {
    backgroundImage: 'url(' + imgUrl + ')',
  };
  const links = [
    { href: '/', text: 'Home' },
    { href: '/developer', text: 'Developer' },
    { href: '/organisation', text: 'Organisation' },
    { href: '/project', text: 'Project' },
    { href: '/team', text: 'Team' },
  ]

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className = { baseClass }>
        <div className = { baseClass + '__logo' }>
          <div className = { baseClass + '__logo__img' } style={ bgImage }></div>
        </div>
        <div className = { baseClass + '__links' }>
          { links.map(el => <SimpleLink data={ el } />)}
        </div>
      </div>
    </div>
  )
}