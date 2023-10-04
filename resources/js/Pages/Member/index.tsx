import InputTextAndLabel from "@/Components/InputTextAndLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Member({ auth }: PageProps) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cadastre um novo Membro!</h2>}
		>
			<Head title="Membros" />

			<div className="py-5">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
						<div className="flex sm:flex-row justify-center">
							{/* <div className="p-6 text-gray-900 dark:text-gray-100 w-64">
								<InputTextAndLabel type="text" id="input_name_member" textLabel="Nome" />
								<InputTextAndLabel type="text" id="input_department_member" textLabel="Departamento" />
							</div>

							<div className="p-6 text-gray-900 dark:text-gray-100 w-64">
								<InputTextAndLabel type="text" id="input_lastname_member" textLabel="Sobrenome" />
								<InputTextAndLabel type="date" id="input_birthday_member" textLabel="Data de Aniversário" />
							</div>

							<div className="p-6 text-gray-900 dark:text-gray-100 w-64">
								<InputTextAndLabel type="email" id="input_email_member" textLabel="Email" />
							</div>

							<div className="p-6 text-gray-900 dark:text-gray-100 w-64">
								<InputTextAndLabel type="text" id="input_phone_member" textLabel="Celular" />
							</div> */}

							<div className="container mx-auto">
								<table className="min-w-full divide-y divide-gray-200 dark:text-white">
									<thead>
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Nome</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Email</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Departamento</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">celular</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">ativo</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-6 py-4 whitespace-nowrap flex">
												<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar do Usuário" />
												<span className="text-sm text-gray-900 dark:text-white ml-4 mt-2">Nome do Usuário</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">usuario@email.com</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">OBREIRO</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">9 9999-9999</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">
													<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">ATIVO</span>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">
													<button type="button" className="p-1 m-1 dark:text-blue-500 border dark:border-blue-500 dark:hover:bg-blue-400 dark:hover:text-gray-100 rounded-lg">EDITAR</button>
												</div>
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 whitespace-nowrap flex">
												<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar do Usuário" />
												<span className="text-sm text-gray-900 dark:text-white ml-4 mt-2">Nome do Usuário</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">usuario@email.com</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">OBREIRO</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">9 9999-9999</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">
													<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">ATIVO</span>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 dark:text-white">
													<button type="button" className="p-1 m-1 dark:text-blue-500 border dark:border-blue-500 dark:hover:bg-blue-400 dark:hover:text-gray-100 rounded-lg">EDITAR</button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}
