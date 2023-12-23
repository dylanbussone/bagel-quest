import Image from "next/image";
import styles from "./page.module.css";

export default function () {
  return (
    <main className={styles.main}>
      <h1>Bagel Quest</h1>
      <h4>Coming soon</h4>
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </main>
  );
}
