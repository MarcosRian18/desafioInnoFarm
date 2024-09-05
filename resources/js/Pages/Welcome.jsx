import { Link, Head, useForm } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onSuccess: () => {
                // Redireciona para o dashboard após o login bem-sucedido
                window.location.href = route('dashboard');
            },
        });
    };

    return (
        <>
            <Head title="Login" />
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="absolute top-6 left-6">
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-400 hover:text-white"
                    >
                        Log in
                    </Link>
                </div>
                <div className="absolute top-6 right-6">
                    <Link
                        href={route('register')}
                        className="font-semibold text-gray-400 hover:text-white"
                    >
                        Register
                    </Link>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500"
                                required
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500"
                                required
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition-colors"
                            disabled={processing}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
