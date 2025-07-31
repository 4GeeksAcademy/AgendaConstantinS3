import React, { useState } from "react";




export const CreateUser = () => {
    const [user, setUser] = useState({
        slug: ""
    });

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://playground.4geeks.com/contact/agendas/${user.slug}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "slug": user.slug
            })
        });
        setUser({
            slug: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="slug"
                value={user.slug}
                onChange={handleInput}
                placeholder="User name"
            />
            <button type="submit">Create User</button>
        </form>
    );
};

