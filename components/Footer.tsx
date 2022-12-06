const year = new Date().getFullYear()

export default function Footer() {
	return (
		<>
			<footer className="text-center">{year}</footer>
		</>
	);
}
