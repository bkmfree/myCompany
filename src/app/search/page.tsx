"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // 검색 결과 데이터 (실제로는 API나 데이터베이스에서 검색해야 함)
  const searchResults = [
    {
      title: '클라우드 솔루션',
      description: '최신 클라우드 기술로 비즈니스의 디지털 전환을 지원합니다.',
      link: '/services#cloud',
      category: '서비스'
    },
    {
      title: 'AI 솔루션',
      description: '인공지능 기술로 비즈니스 프로세스를 최적화합니다.',
      link: '/services#ai',
      category: '서비스'
    },
    {
      title: '빅데이터 솔루션',
      description: '데이터 기반의 의사결정을 지원하는 빅데이터 솔루션을 제공합니다.',
      link: '/services#bigdata',
      category: '서비스'
    }
  ].filter(item => 
    query && (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            &ldquo;{query}&rdquo; 검색 결과
          </h1>
          
          {searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">
                      <Link href={result.link} className="text-blue-600 hover:text-blue-800">
                        {result.title}
                      </Link>
                    </h2>
                    <span className="text-sm text-gray-500">{result.category}</span>
                  </div>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                검색 결과가 없습니다.
              </p>
              <p className="text-gray-500">
                다른 검색어로 다시 시도해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 