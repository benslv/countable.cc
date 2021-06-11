import Head from "next/head";

import { Maintenance } from "../components/Maintenance";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Maintenance />
		</div>
	);
}
