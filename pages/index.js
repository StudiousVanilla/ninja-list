import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="container">
        <h1 className="heading">Homepage</h1>
        <p className="my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam odio repellendus, nisi aspernatur explicabo porro distinctio aut cupiditate, aperiam aliquid vero delectus provident corporis corrupti ea deleniti tempore necessitatibus. Maxime.</p>
        <p className="my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam odio repellendus, nisi aspernatur explicabo porro distinctio aut cupiditate, aperiam aliquid vero delectus provident corporis corrupti ea deleniti tempore necessitatibus. Maxime.</p>
        <Link href="/ninjas">
          <a className="btn text-white bg-blue-500">See Ninja Listing</a>
        </Link>
      </div>
      </>
  )
}
