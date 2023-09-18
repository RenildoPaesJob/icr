import LogoICR from "@/Components/LogoICR";
import PrimaryButton from "@/Components/PrimaryButton";

import { GridPhotos } from "./GridPhotos";
import { SobreNos } from "./SobreNos";


export function WebIndex() {
	return (
		<>
			<div className="flex justify-center sm:flex-col lg:flex-row">
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

					<div className="justify-center flex xs:mb-4 xs:w-full">
						<PrimaryButton>Quero Conhecer</PrimaryButton>
					</div>
				</div>

				<div className="flex-1 flex justify-center">
					<GridPhotos />
				</div>
			</div>
			
			<div className="text-center text-6xl mb-4 text-white font-medium">
				Sobre Nós
			</div>

			<div className="md:flex justify-center sm:flex-col lg:flex-row">
				<SobreNos />
			</div>
		</>
	);
}
