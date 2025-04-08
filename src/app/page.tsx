import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/company-logo.png"
          alt="현대적인 오피스 공간"
          fill
          className="object-cover object-center brightness-[1.02]"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-blue-900/50 to-indigo-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[1px]">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg bg-clip-text">
              혁신적인 IT 솔루션
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md font-light tracking-wide">
              최신 기술로 비즈니스의 미래를 선도합니다
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white/90 text-blue-900 rounded-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl font-medium"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">클라우드 솔루션</h3>
            <p className="text-gray-600">
              최신 클라우드 기술로 비즈니스의 디지털 전환을 지원합니다.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI 솔루션</h3>
            <p className="text-gray-600">
              인공지능 기술로 비즈니스 프로세스를 최적화합니다.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">빅데이터 솔루션</h3>
            <p className="text-gray-600">
              데이터 기반의 의사결정을 지원하는 빅데이터 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">고객 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-gray-200 rounded-full mr-6"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">김서연</h4>
                  <p className="text-gray-600 text-lg">ABC 기업 CEO</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                &ldquo;TechCorp의 클라우드 솔루션으로 우리 기업의 디지털 전환이 크게 가속화되었습니다.&rdquo;
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-gray-200 rounded-full mr-6"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">이준호</h4>
                  <p className="text-gray-600 text-lg">XYZ 기업 CTO</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                &ldquo;AI 솔루션 도입 후 업무 효율성이 30% 이상 향상되었습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
