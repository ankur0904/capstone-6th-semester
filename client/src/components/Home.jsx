

function 

Home() {
  return (

    <>
    
{/* ###### nav bar and main body*/}
    <div class="bg-white object-contain bg-local bg-cover" style={{"background-image": "url('https://wallpapers.com/images/hd/alone-minimalist-4k-rcdbzrzkz7fcljkq.webp')"}}>
    <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Product</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Features</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Marketplace</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Company</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    <div class="lg:hidden" role="dialog" aria-modal="true">

      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="/#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="/#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-50 hover:bg-gray-50">Product</a>
              <a href="/#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-50 hover:bg-gray-50">Features</a>
              <a href="/#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-50 hover:bg-gray-50">Marketplace</a>
              <a href="/#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-50 hover:bg-gray-50">Company</a>
            </div>
            <div class="py-6">
              <a href="/#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{"clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-7 text-black ring-2 ring-slate-900/30 hover:ring-gray-900/20">
        Unlock the power of interaction, where every message becomes a spark in the conversation.. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-black-900 sm:text-6xl">Connecting world</h1>
        <p class="mt-6 text-lg leading-8 text-black">
"Welcome to our live interactive chat! We're thrilled to have you join us. Feel free to ask questions, share thoughts, or engage with fellow participants. Let's make this chat experience memorable and enriching for everyone involved. Happy chatting!"





</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join Session</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Create Session <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{"clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>
  </div>
    </div>

{/* ###### some content */}
    <div class="bg-neutral-200 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to improve your work by an expert's advice.</p>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-black pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">Mar 10, 2024</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Technical</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span class="absolute inset-0"></span>
              Keep the tech up-to-date
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">It's a nice a platform but since similar platform already exist so make sure to improve the platform to make it stand out.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Mahatma Gandhi
              </a>
            </p>
            <p class="text-gray-600">Lawyer / Activist</p>
          </div>
        </div>
          </article>
        </div>
      </div>
    </div>

{/* ####### team member */}
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">It's a project by 3rd year students of CSEAI which allow the user to interact others. Try it and experience our cutting edge platform.</p>
        </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Kuldeep Singh</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FydG9vbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Ankur Singh</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Project Manager</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1583946099390-4ed248a602c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVtb2ppfGVufDB8fDB8fHww" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Nishant Gupta</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
          </div>
        </div>
      </li>


    </ul>
  </div>
    </div>

{/* ####### footer */}
    <div className="bg-neutral-200 py-20 sm:py-5  p-6 lg:px-8">
    
      <div class="hidden lg:flex lg:gap-x-12 justify-center">
        <a href="/#" class="text-sm font-semibold leading-7 text-black">About</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Privacy Policy</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Licensing</a>
        <a href="/#" class="text-sm font-semibold leading-6 text-black">Contact us</a>
      </div>
      <div class="lg:flex lg:gap-x-12 justify-center">
        <p>Copyright &copy; Company</p>
      </div>
    </div>
    
    </>

  );
}

export default Home;
