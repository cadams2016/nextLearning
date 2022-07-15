import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { loadPosts } from '../../lib/posts';

export async function getStaticProps() {
  const posts = await loadPosts()
  return { props: { posts } };
}

export default function Blog({ posts }) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
        <div className="blogs">
          {posts.data.map(({ id, title, slug, hero_image, excerpt, i }) => (
              <div key={i} id={`blog${id}`} className={`blogs__item item1 horses`}>
                <div className="blog__img">
                  <img src={`https://directus.app.nutramax.com/assets/${hero_image}`} alt={title} />
                </div>
                <div className={`blog__content blog-${id}`}>
                  <Link href={`/cosequin-blog/${slug}`}>
                    <h2 className="blog__title">{title}</h2>
                  </Link>
                  <hr className="blog__hr"></hr>
                  {excerpt}
                  <div className="blog__link">
                    <Link href={`/cosequin-blog/${slug}`}>Read Post</Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
        </section>
      </Layout>
    );
  }