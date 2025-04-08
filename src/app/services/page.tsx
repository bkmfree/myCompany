export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
            <span className="mr-2">🚀</span>
            <span>서비스</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">TechCorp</span> 서비스
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            최신 기술을 활용한 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
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
              <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">클라우드 솔루션</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>클라우드 인프라 구축</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>서버리스 아키텍처</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>클라우드 마이그레이션</span>
                </li>
              </ul>
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
              <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">AI 솔루션</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>머신러닝 모델 개발</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>자연어 처리</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>컴퓨터 비전</span>
                </li>
              </ul>
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
              <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">빅데이터 솔루션</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>데이터 수집 및 저장</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>실시간 데이터 처리</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span>데이터 분석 및 시각화</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
          <div className="relative p-8 md:p-12">
            <h2 className="mb-12 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">서비스 프로세스</h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">요구사항 분석</h3>
                <p className="text-gray-600 dark:text-gray-300">고객의 니즈를 정확히 파악하고 분석합니다.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">솔루션 설계</h3>
                <p className="text-gray-600 dark:text-gray-300">최적의 솔루션을 설계하고 계획합니다.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">개발 및 구현</h3>
                <p className="text-gray-600 dark:text-gray-300">최신 기술을 활용하여 솔루션을 구현합니다.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">테스트 및 배포</h3>
                <p className="text-gray-600 dark:text-gray-300">철저한 테스트 후 안정적으로 배포합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
          <div className="relative p-8 md:p-12">
            <h2 className="mb-12 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">고객 후기</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-400/5 dark:to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 shadow-md">
                      <span className="text-xl font-bold text-white">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">A사 CTO</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">제조업</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    &ldquo;클라우드 솔루션 도입으로 시스템 운영 비용이 30% 절감되었습니다.&rdquo;
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 shadow-md">
                      <span className="text-xl font-bold text-white">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">B사 CEO</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">금융</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    &ldquo;AI 솔루션을 통해 고객 서비스 품질이 크게 향상되었습니다.&rdquo;
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 dark:from-cyan-400/5 dark:to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 shadow-md">
                      <span className="text-xl font-bold text-white">C</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">C사 CTO</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">유통</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    &ldquo;빅데이터 솔루션으로 매출 예측 정확도가 40% 향상되었습니다.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 