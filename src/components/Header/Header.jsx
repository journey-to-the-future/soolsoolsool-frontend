import logo from '../../assets/soolsoolsool.png';

const Header = () => {
    return (
        <header className="None:container mx-auto h-16 shadow-md md:h-32">
            <div className="h-16 xl:container xl:mx-auto md:border-0 border-b-2">
                <div className="w-19/20 mx-auto h-16 flex">
                    
                    <div className="w-120 my-auto">
                        <div className="flex h-10">
                            <div className='w-5 h-5 mr-3 my-auto md:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                            </div>
                            <a href="#" className="mr-5">
                                <img src={logo} className="md:h-10 h-9"></img>
                            </a>
                            <div className="hidden md:flex ml-5">
                                <label className="relative block w-80">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg className="h-4 w-4 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                                    </span>
                                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search any liquor" type="text" name="search"/>
                                </label>
                            </div>
                        </div>
                    </div>
                
                    <div className="flex-auto"></div>

                    <div className="w-64 my-auto">
                        <nav className="flex md:justify-between justify-end">
                            <a href="/dashboard" className="text-slate-600 hover:text-slate-900 hidden md:flex">Home</a>
                            <a href="/team" className="text-slate-600 hover:text-slate-900 hidden md:flex">Team</a>
                            <a href="/projects" className="text-slate-600 hover:text-slate-900 hidden md:flex">Projects</a>
                            <a href="/mypage" className="fill-slate-600 hover:fill-slate-900">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                            </a>
                            <div className='ml-4 mr-3 md:hidden'>
                                <svg className="h-5 w-5 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="h-16 xl:container xl:mx-auto">
                <nav className="w-19/20 mx-auto h-16 flex items-center">
                    <a href="/recommand" className="text-slate-600 hover:text-slate-900 hidden md:flex ml-8">Wines</a>
                    <a href="/recommand" className="text-slate-600 hover:text-slate-900 hidden md:flex ml-8">Pairings</a>
                    <a href="/recommand" className="text-slate-600 hover:text-slate-900 hidden md:flex ml-8">Grapes</a>
                    <a href="/recommand" className="text-slate-600 hover:text-slate-900 hidden md:flex ml-8">Regions</a>
                    <a href="/recommand" className="text-slate-600 hover:text-slate-900 hidden md:flex ml-8">Awards</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;