import CrossIco from './components/icons/CrossIco'
import MoonIco from './components/icons/MoonIco'
const App = () => {
    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

            <header className="container mx-auto px-4  pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
                    <button><MoonIco fill='#000'/></button>
                
                </div>
                <form className="mt-8 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
                    <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
                    <input className="w-full text-gray-500 outline-none" type="text" placeholder="Create a new todo..." />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="bg-white rounded-md ">
                    <article className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-400 grow">Complete online Javascript course in bluuweb</p>
                        <button className='flex-none'><CrossIco /></button>
                    </article>

                    <article className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-400 grow">Complete online Javascript course in bluuweb</p>
                        <button className='flex-none'><CrossIco /></button>
                    </article>

                    <article className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-400 grow">Complete online Javascript course in bluuweb</p>
                        <button className='flex-none'><CrossIco /></button>
                    </article>
                    <article className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-400 grow">Complete online Javascript course in bluuweb</p>
                        <button className='flex-none'><CrossIco /></button>
                    </article>

                    <section className='py-4 px-4 flex justify-between'>
                        <span className='text-gray-400'>5 items left</span>
                        <button className='text-gray-400'>Clear completed</button>
                    </section>
                </div>

            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className='bg-white rounded-md flex justify-evenly p-4'>
                    <button className='text-blue-600'>All</button>
                    <button className='hover:text-blue-600'>Active</button>
                    <button className='hover:text-blue-600'>Completed</button>
                </div>
            </section>
            <section className="container mx-auto px-4 mt-8 text-center text-gray-400">
                Drag and drop to reorder list
            </section>

        </div>
    )
}

export default App