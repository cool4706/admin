import '@/styles/globals.css'
import Layout from '@/components/layout'

function MyApp({ Component, pageProps }) {
  let e = true;
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
