export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
            <span className="mr-2">🏢</span>
            <span>회사 소개</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">TechCorp</span> 소개
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            TechCorp는 혁신적인 기술 솔루션을 제공하는 글로벌 IT 기업입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 md:p-10">
              <h2 className="mb-6 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">우리의 비전</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                TechCorp는 기술을 통해 더 나은 미래를 만들어가는 것을 목표로 합니다.
                우리는 고객의 디지털 전환을 지원하고, 혁신적인 솔루션을 제공하여
                비즈니스의 성장을 돕습니다.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 md:p-10">
              <h2 className="mb-6 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">우리의 가치</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 shadow-md">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <span>혁신과 창의성</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 shadow-md">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <span>고객 중심 사고</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 shadow-md">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <span>지속가능한 성장</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 shadow-md">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <span>팀워크와 협력</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">우리의 기술</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="m16 16-4-4-4 4"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">클라우드 컴퓨팅</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  최신 클라우드 기술을 활용하여 확장성과 유연성을 제공합니다.
                  AWS, Azure, GCP 등 주요 클라우드 플랫폼을 활용한 맞춤형 솔루션을 제공합니다.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2a10 10 0 0 0-5 19l-1 3 3-1a10 10 0 0 0 19-5 10 10 0 0 0-10-10Z"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">인공지능</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI 기술을 통해 데이터 기반의 의사결정을 지원합니다.
                  머신러닝과 딥러닝을 활용한 AI 솔루션을 제공합니다.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 dark:from-cyan-400/10 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">빅데이터</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  대규모 데이터 수집, 저장, 분석을 위한 솔루션을 제공합니다.
                  실시간 데이터 처리와 인사이트 도출을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
          <div className="relative p-8 md:p-12">
            <h2 className="mb-12 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">회사 연혁</h2>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"></div>
              <div className="space-y-16">
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-blue-400 shadow-lg"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">2020</h3>
                    <p className="text-gray-600 dark:text-gray-300">TechCorp 설립</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-500 dark:bg-purple-400 shadow-lg"></div>
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">2021</h3>
                    <p className="text-gray-600 dark:text-gray-300">클라우드 솔루션 출시</p>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-lg"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">2022</h3>
                    <p className="text-gray-600 dark:text-gray-300">AI 솔루션 출시</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-amber-500 dark:bg-amber-400 shadow-lg"></div>
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">2023</h3>
                    <p className="text-gray-600 dark:text-gray-300">빅데이터 솔루션 출시</p>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-blue-400 shadow-lg"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">2024</h3>
                    <p className="text-gray-600 dark:text-gray-300">글로벌 시장 진출</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 