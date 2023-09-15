import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { WebIndex } from "./Web";

export default function Welcome({ auth }: PageProps) {
	return (
		<>
			<Head title="Bem Vindo à ICR!" />

			<div className="flex flex-col min-h-screen bg-center dark:bg-dots-lighter dark:bg-gray-900">
				<div className="sm:top-0 sm:right-0 p-6 text-right lg:text-2xl">
					{auth.user ? (
						<Link
							href={route("dashboard")}
							className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
						>
							Dashboard
						</Link>
					) : (
						<>
							<Link
								href={route("login")}
								className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:focus:outline dark:focus:outline-2 dark:focus:rounded-sm dark:focus:outline-red-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Entrar
							</Link>

							<Link
								href={route("register")}
								className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Cadastrar
							</Link>
						</>
					)}
				</div>

				<WebIndex />
			</div>
		</>
	);
}
