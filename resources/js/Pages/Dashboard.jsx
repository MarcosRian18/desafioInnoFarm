import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, tasks }) {

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="bg-gray-900 min-h-screen py-12 flex items-center justify-center">
                <div className="max-w-7xl w-full sm:px-6 lg:px-8">
                    <h1 className="text-center text-white text-3xl mb-8">Tasks</h1>

                    <div className="flex justify-end mb-4">
                        <Link
                            href={route('tasks.create')}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Criar Nova Task
                        </Link>
                    </div>

                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <table className="min-w-full bg-gray-700 text-white rounded-lg">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="py-3 px-6">ID</th>
                                    <th className="py-3 px-6">Nome da Task</th>
                                    <th className="py-3 px-6">Categoria</th>
                                    <th className="py-3 px-6">Status</th>
                                    <th className="py-3 px-6 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks && tasks.length > 0 ? (
                                    tasks.map((task) => (
                                        <tr key={task.id} className="border-b border-gray-600">
                                            <td className="py-2 px-6">{task.id}</td>
                                            <td className="py-2 px-6">{task.name}</td>
                                            <td className="py-2 px-6">{task.category ? task.category.name : 'Sem Categoria'}</td>
                                            <td className="py-2 px-6">{task.status || 'Sem status'}</td>
                                            <td className="py-2 px-6 flex justify-center space-x-4">
                                                <Link
                                                    
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                                    onClick={() => {
                                                        if (confirm('Deseja realmente excluir esta task?')) {
                                                            // Função para deletar a task (implementação necessária)
                                                            console.log('teste');
                                                        }
                                                    }}
                                                >
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="py-2 px-6 text-center">Nenhuma Task Encontrada</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
