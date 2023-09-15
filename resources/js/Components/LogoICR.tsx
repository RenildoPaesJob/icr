import logo from "../../img/lion_logo_icr.png";
import logoDescription from "../../img/logo_icr_com_descricao.png";

interface LogoProps {
	descrition?: boolean;
}

export default function LogoICR({ descrition = false }: LogoProps) {
	return (
		<img
			src={descrition ? logoDescription : logo}
			alt="Logo ICR"
			className="w-40 h-40 rounded-lg shadow-2xl"
		/>
	);
}
