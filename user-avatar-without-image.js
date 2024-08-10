const App = () => {
	const userName = 'John Doe'
	return (
		<div className="flex justify-end w-full ">
			<div className="flex items-center gap-3">
				<div className="border border-black w-9 h-9 rounded-full flex items-center justify-center">
					{userName[0]}
				</div>
				<h1 className="text-md font-bold">{userName}</h1>
			</div>
		</div>
	)
}

export default App
