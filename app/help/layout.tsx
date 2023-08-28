import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
        <div className="navbar shadow-lg z-10 h-1">
        <div className="flex-1">
            <Link href="/">
            <h1 className="btn btn-ghost normal-case text-xl text-bgColor">Curenimal</h1>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-bgColor">
            <li><a>Hospitals</a></li>
            <li>
                <details>
                <summary>
                    More
                </summary>
                <ul className="p-1 indent-1">
                    <li><a>Lost and Found</a></li>
                    <li><a>About us</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div className="bg-stone-100">
        {children}
        </div>
        </body>
    </html>
  )
}