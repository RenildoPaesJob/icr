import LogoICR from "@/Components/LogoICR";
import PrimaryButton from "@/Components/PrimaryButton";

export function WebIndex() {
	return (
		<>
			<div className="md:flex justify-center gap-10 sm:flex-col lg:flex-row">
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

				<div className="flex-col flex-1 flex sm:m-8">
					<div className="flex items-center space-x-6 lg:space-x-8 md:justify-center sm:justify-center">
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
