import LogoICR from "@/Components/LogoICR";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head } from "@inertiajs/react";

export function WebIndex() {
	return (
		<>
			<div className="flex justify-between h-screen">
				<div className="bg-yellow-500 flex-1">
					<div className="mt-20 flex justify-center">
						<LogoICR />
					</div>

					<div className="bg-red-700 w-4/6">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex justify-center m-5">
							Igreja Cristã Rhema
						</h1>

						<p className="mt-4 text-xl text-gray-300 text-end">
							A alegria do senhor, é a nossa força!
						</p>

					</div>
				</div>

				<div className="bg-red-500 flex-1">
					<h1>Hello World</h1>
				</div>
			</div>

			{/* <div className="relative overflow-hidden bg-center dark:bg-dots-lighter dark:bg-gray-900">
				<div className="flex mb-6">
					<LogoICR />
				</div>

				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Igreja Cristã Rhema
				</h1>

				<p className="mt-4 text-xl text-gray-400">
					A alegria do senhor, é a nossa força!
				</p>

				<PrimaryButton className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-4">
					Quero Conhecer
				</PrimaryButton>
			</div> */}
		</>
	);
}
