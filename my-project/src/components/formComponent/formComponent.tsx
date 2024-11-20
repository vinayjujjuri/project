import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
}

export function FormComponent() {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = (): boolean => {
        const formErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            formErrors.name = "Name is required.";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            formErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            formErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!formData.password) {
            formErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted Successfully", formData);
        } else {
            console.log("Form has errors.");
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}