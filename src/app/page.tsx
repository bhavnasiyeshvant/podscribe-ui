import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

const podcasts = [
  {
    id: 1,
    title: 'The Joe Rogan Experience',
    image: 'https://via.placeholder.com/150',
    description: 'The Joe Rogan Experience podcast is a long-form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.',
    url: 'https://www.joerogan.com/',
  },
  {
    id: 2,
    title: 'Radiolab',
    image: 'https://via.placeholder.com/150',
    description: 'Radiolab is a show about curiosity. Where sound illuminates ideas, and the boundaries blur between science, philosophy, and human experience.',
    url: 'https://www.wnycstudios.org/podcasts/radiolab',
  },
  {
    id: 3,
    title: 'Serial',
    image: 'https://via.placeholder.com/150',
    description: 'Serial is a podcast from the creators of This American Life, hosted by Sarah Koenig. Serial tells one story—a true story—over the course of a season.',
    url: 'https://serialpodcast.org/',
  },
];

export default function Home() {

  return (

    <main className={styles.main}>
      <Head>
        <title>Podscribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div>

      <div className="container mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Podscribe</h1>

          <div className="relative">
            <input
              type="text"
              placeholder="Search podcasts"
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <div className="absolute top-0 left-4 ml-2 mt-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="border border-gray-300 rounded-lg p-4">
              <Link href={podcast.url}>
                  <img src={podcast.image} alt={podcast.title} className="mb-2" />
                  <h2 className="text-xl font-bold mb-2">{podcast.title}</h2>
              </Link>
              <p>{podcast.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </main>
  )
}
