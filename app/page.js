import Link from 'next/link';
import Item from '@/components/item';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id, complete) {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href='/new'
        >
          New
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
