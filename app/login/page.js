// app/register/page.js
"use client";
import { set } from "mongoose";
import { useState } from "react";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
    const [email, setEmail] = useState("somkiat@gmail.com");
    const [password, setPassword] = useState("42117622");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            setLoading(true);
            //ส่งให้ฐานข้อมูล //console.table({ name, email, password });
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            setLoading(false);

            if (result?.error) {
                toast.error(result?.error);
            } else {
                toast.success("Login success");
                //router.push("/");
                router.push(callbackUrl);
            }

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 bg-light p-3 shadow">
                        <h2 className="mb-4 text-center">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Your email"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Your password"
                            />
                            <button
                                className="btn btn-primary btn-raised"
                                disabled={loading || !email || !password}
                            >
                                {loading ? "Please wait.." : "Submit"}
                            </button>
                            <br />

                        </form>
                        <button
                            className="btn btn-danger btn-raised mb-4"
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}