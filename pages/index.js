import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
        <script src="https://cdn.jsdelivr.net/npm/kursor"></script>

        <meta name="google-site-verification" content="JK0CKKaCehLrFKt4SeqkNNLGpp4adw2kEoTEaFw7DuQ" />
        <title>Ben Hanan Subendran | Country Singer-Songwriter from 🇱🇰 🎹🎸🎷🎧🎵</title>
        <meta name="title" content="Ben Hanan Subendran | Country Singer-Songwriter from 🇱🇰 🎹🎸🎷🎧🎵" />
        <meta name="description" content="Artiste Website | One place to find all music streaming profile links of Ben Hanan Subendran" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.benhanansubendran.digital/" />
        <meta property="og:title" content="Ben Hanan Subendran | Country Singer-Songwriter from 🇱🇰 🎹🎸🎷🎧🎵" />
        <meta property="og:description" content="Artiste Website | One place to find all music streaming profile links of Ben Hanan Subendran" />
        <meta property="og:image" content="https://i.ibb.co/HTcRkJ7/Capture.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.benhanansubendran.digital/" />
        <meta property="twitter:title" content="Ben Hanan Subendran | Country Singer-Songwriter from 🇱🇰 🎹🎸🎷🎧🎵" />
        <meta property="twitter:description" content="Artiste Website | One place to find all music streaming profile links of Ben Hanan Subendran" />
        <meta property="twitter:image" content="https://i.ibb.co/HTcRkJ7/Capture.png" />


      </Head>

      <main>
        <div className={utilStyles.mainI}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
          />
        </div>
        <h1 className="title">
          Ben Hanan Subendran
        </h1>

        <p className="description">
          Ben Hanan Subendran is a Composer / Singer- Songwriter / Musician and Record Producer from Sri Lanka. His musical styles include Gospel, Country, Pop, Jazz, Western classical and Eastern classical. He has currently released his first Gospel Album in Tamil named "Redemption".
        </p>

        <div className="grid">
          <a href="https://music.apple.com/us/artist/ben-hanan-subendran/1569052568" className="card">
            <h3>Apple</h3>
            <p>Listen to music by Ben Hanan Subendran on Apple Music. Find top songs and albums by Ben Hanan Subendran, including Iremia POP, Gangස්டர் and more.</p>
          </a>

          <a href="https://open.spotify.com/artist/34HvsQGz67U5PcsmgDZSWY?si=uNhL25hpQRa9RAtIULjRiA&dl_branch=1" className="card">
            <h3>Spotify</h3>
            <p>Listen to music by Ben Hanan Subendran on Spotify. Find top songs and albums by Ben Hanan Subendran, including Iremia POP, Gangස්டர் and more.</p>
          </a>

          <a
            href="https://music.amazon.ca/artists/B095TPBF9D/ben-hanan-subendran?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA"
            className="card"
          >
            <h3>Amazon Music</h3>
            <p>Listen to music by Ben Hanan Subendran on Amazon Music. Find top songs and albums by Ben Hanan Subendran, including Iremia POP, Gangස්டர் and more.</p>
          </a>

          <a
            href="https://www.deezer.com/en/artist/134050102"
            className="card"
          >
            <h3>Deezer</h3>
            <p>
              Listen to music by Ben Hanan Subendran on Deezer. Find top songs and albums by Ben Hanan Subendran, including Iremia POP, Gangස්டர் and more.
            </p>
          </a>

          <a
            href="https://www.jiosaavn.com/artist/ben-hanan-subendran/Mgcnei6cqM8_"
            className="card"
          >
            <h3>Jio Saavn</h3>
            <p>
              Listen to music by Ben Hanan Subendran on Jio Saavn. Find top songs and albums by Ben Hanan Subendran, including Iremia POP, Gangස්டர் and more.
            </p>
          </a>
        </div>
      </main>

      <footer>
        © Ben Hanan Subendran
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 5px solid #6AFFA7;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;

        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 5rem;
          color: #6AFFA7;
          text-decoration: none;
          border: 5px solid #eaeaea;
          border-radius: 100px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #6AFFA7;
          border-color: #6AFFA7;
          background-color: black;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <script dangerouslySetInnerHTML={{ __html: `new kursor({
            type: 2,
            removeDefaultCursor: true,
            color: '#6AFFA7'
        })` }} />
    </div>
  )
}
