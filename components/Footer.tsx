const year = new Date().getFullYear()

export default function Footer() {
	return (
		<>
			<footer className="mt-4 text-center text-[10px] lg:text-base">{year}</footer>
		</>
	);
}
