import LogoICR from "@/Components/LogoICR";
import PrimaryButton from "@/Components/PrimaryButton";

import { GridPhotos } from "./GridPhotos";


export function WebIndex() {
	return (
		<>
			<div className="md:flex justify-center sm:flex-col lg:flex-row">
				<div className="flex-col flex-1 flex justify-center">
					<div className="flex justify-center">
						<LogoICR />
					</div>

					<div className="p-4 mx-4 mt-4">
						<div className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl flex justify-center">
							Igreja Cristã Rhema
						</div>

						<div className="mt-4 text-xl text-center text-gray-300">
							A alegria do senhor, é a nossa força!
						</div>
					</div>

					<div className="justify-center flex">
						<PrimaryButton>Quero Conhecer</PrimaryButton>
					</div>
				</div>

				<div className="flex-col flex-1 flex">
					<GridPhotos />
				</div>
			</div>
		</>
	);
}
