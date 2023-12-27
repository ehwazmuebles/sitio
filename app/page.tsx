import styles from './page.module.css'
import Hero, {HeroItem} from '../components/hero';

export default function Home() {
  const carouselImages: HeroItem[] = [
    {image: 'carousel1.png', url:"#"},
    {image: 'carousel2.png', url:"#"}
  ];

  return (
    <main className={styles.main}>
      <section  style={{width: "100%"}}>
      <Hero images={carouselImages} />
      </section>
    </main>
  )
}

