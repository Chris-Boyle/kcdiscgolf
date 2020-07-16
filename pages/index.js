import Head from 'next/head';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Welcome! Check out the courses and maps.</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Disc Golf Courses</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href='/posts/[id]' as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          <h2 className={utilStyles.headingLg}>
            2019 GBO TOP SHOTS | DISC GOLF HIGHLIGHT REEL
          </h2>
          <ReactPlayer
            url='https://youtu.be/c-htzJXJnKk'
            className='react-player'
            width='100%'
            height='30rem'
            controls
          />
        </section>
      </Layout>
    </>
  );
}
