import ministerioAdorart from "../../../img/ministerio_adorart.png";
import eventoReinoDeus from "../../../img/evento_1.png";

export function GridPhotos() {
	return (
		<>
			<div className="flex items-center space-x-6 lg:space-x-8 md:justify-center sm:justify-center">
				<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
					{/* left */}
					<div className="h-64 w-44 overflow-hidden rounded-lg">
						<img
							src={ministerioAdorart}
							alt=""
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="h-64 w-44 overflow-hidden rounded-lg">
						<img
							src={eventoReinoDeus}
							alt=""
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				{/* center */}
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
				{/* right */}
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
		</>
	);
}
