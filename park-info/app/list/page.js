import Link from 'next/link';

export default function List() {
  let name = 'ICE Breakers';

  return (
    <div>
      <h4 className="title">주차장목록</h4>
      <div className="park">
        <img src="/park2.jpg" alt="업데이트예정" className="park2-img" />
        <h4>정석 주차장</h4>
      </div>
      <div className="park">
        
        <h4>하이테크 주차장</h4>
        <Link href="/cart">
          <button className='mybtn'>현황보기</button>
        </Link>
      </div>
      <p className="title-sub">by {name} </p>
    </div>
  );
}