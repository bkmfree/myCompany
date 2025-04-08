export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          연락처
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          TechCorp와 함께 성장할 기회를 놓치지 마세요.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold">문의하기</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
              >
                보내기
              </button>
            </form>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold">연락처 정보</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium">주소</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  서울특별시 강남구 테헤란로 123
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">전화</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  02-1234-5678
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">이메일</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  contact@techcorp.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">영업시간</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  평일 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 