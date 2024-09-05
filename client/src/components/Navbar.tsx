export default function Navbar() {
	return (
		<>
			<nav className="p-4 border-b-2 border-blue-500">
				<div className="container mx-auto flex justify-between items-center">
					<div className="text-slate-950 text-2xl font-bold">
						<img
							className="w-20"
							src="/public/logotypeLinx.png"
							alt="Logotype Linx"
						/>
					</div>
					<ul className="flex space-x-4">
						<li>
							<a href="#product" className="text-slate-950 hover:text-blue-700">
								Product
							</a>
						</li>
						<li>
							<a href="#login" className="text-slate-950 hover:text-blue-700">
								Login
							</a>
						</li>
						<li>
							<a href="#signup" className="text-slate-950 hover:text-blue-700">
								Sign Up
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
