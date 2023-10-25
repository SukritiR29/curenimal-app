import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <nav>
        <div className="navbar shadow-lg z-10 h-1 bg-bgColor">
        <div className="flex-1">
            <Link href="/">
            <h1 className="btn btn-ghost normal-case text-xl text-red-900">Curenimal</h1>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-red-900">
            <li><a>Hospitals</a></li>
            <li>
                <details>
                <summary>
                    More
                </summary>
                <ul className="p-1 indent-1">
                    <li><Link href="/help">Help</Link></li>
                    <li><a>About us</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div>
            {children}
        </div>
        </body>
    </html>
  )
}