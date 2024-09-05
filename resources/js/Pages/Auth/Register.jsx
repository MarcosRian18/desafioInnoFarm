import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onSuccess: () => {
              
                window.location.href = route('login');
            },
        });
    };

    return (
        <GuestLayout className="bg-gray-900 min-h-screen flex items-center justify-center">
            <Head title="Register" />

            <form
                onSubmit={submit}
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md text-white"
            >
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Name" className="text-gray-200" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full bg-gray-700 text-white border-gray-600"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2 text-red-500" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="email" value="Email" className="text-gray-200" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-gray-700 text-white border-gray-600"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2 text-red-500" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="password" value="Password" className="text-gray-200" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-gray-700 text-white border-gray-600"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2 text-red-500" />
                </div>

                <div className="mb-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="text-gray-200"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full bg-gray-700 text-white border-gray-600"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2 text-red-500" />
                </div>

                <div className="flex items-center justify-between mt-6">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-400 hover:text-gray-200"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        disabled={processing}
                    >
                        Cadastrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
