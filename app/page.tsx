import Link from 'next/link';

export default function Home() {
  const backgroundImageUrl = 'url("/assests/curenimalbg.png")';
  return (
  <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
    <div className="hero-overlay bg-opacity-55"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">CureNimal</h1>
        <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <Link href="/help">
        <button className="btn btn-accent text-neutral-focus mr-5">Help now</button>
        </Link>
        <Link href="/lostFound">
        <button className="btn btn-accent text-neutral-focus ml-5">Lost and Found</button>
        </Link>
      </div>
    </div>
  </div>
    
  )
}
