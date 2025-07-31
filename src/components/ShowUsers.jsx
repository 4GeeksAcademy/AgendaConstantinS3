import { useEffect, useState } from "react";
import { createLogger } from "vite";




export const ShowUsers = () => {

    const [obtainUser, setObtainUser] = useState([])

	async function getUsers() {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user.slug}/contacts`)
		const data = await response.json()
		setObtainUser(data.contacts)
        console.log(data.contacts)
        console.log(user.slug)
	}
    useEffect(() => {
	getUsers();
}, []);

	return (
		<div className="row">
				{obtainUser.map((obtainUser, id) => (
					<div className="col-md-4 mb-4" key={id}>
						<div className="card h-100 shadow p-3">
							<h5>{obtainUser.slug}</h5>
						</div>
					</div>
				))}
			</div>
	);
}
