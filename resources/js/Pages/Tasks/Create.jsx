import { useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreateTask({ auth, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category_id: '',
        status: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tasks.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="bg-gray-900 min-h-screen py-12 flex items-center justify-center">
                <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-white text-2xl mb-4">Adicionar Task</h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-white">Nome da Task</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                                required
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-white">Categoria</label>
                            <select
                                value={data.category_id}
                                onChange={(e) => setData('category_id', e.target.value)}
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                                required
                            >
                                <option value="">Selecione uma categoria</option>
                                <option value="1">Pessoal</option>
                                <option value="2">Profissional</option>
                                <option value="3">Organização</option>
                            </select>
                            {errors.category_id && <p className="text-red-500">{errors.category_id}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-white">Status</label>
                            <select
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                                required
                            >
                                <option value="">Selecione o status</option>
                                <option value="A fazer">A fazer</option>
                                <option value="Fazendo">Fazendo</option>
                                <option value="Finalizada">Finalizada</option>
                            </select>
                            {errors.status && <p className="text-red-500">{errors.status}</p>}
                        </div>

                        <div className="flex justify-between items-center">
                            <Link href={route('tasks.index')} className="text-gray-400 underline">
                                Voltar
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                            >
                                Adicionar Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
