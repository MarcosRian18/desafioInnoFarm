<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(){
        $tasks = Task::with('category')->get();
        return Inertia::render('Dashboard', ['tasks' => $tasks]);
    }
    

    public function create(){
        $categories = Category::all();
        return Inertia::render('Tasks/Create', ['categories'=> $categories]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'status' => 'nullable|string',
        ]);

        Task::create($validated);

        return redirect()->route('dashboard')->with('success', 'Task criada com sucesso!');
    }
}
