import Link from 'next/link';

export default function Home() {

  const name = 'ICE Breakers'
  return (

    <div>
      
      <h4 className="title">인하 주차 현황</h4>
      <Link href="/list">
          <button className='mybtn'>주차장 목록 보기</button>
        </Link>
      <p className="title-sub">by {name} </p>
    </div>

  )
}