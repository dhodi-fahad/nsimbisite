import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
      <div className={styles.page}>

        <div className={styles.hero}>

          <div>
            <Image className={styles.image} src={"/Hero.svg"} width={800} height={300} priority alt="Nsimbi Shopping Hero Image"/>
          </div>
        </div>


      </div>
  )
}
