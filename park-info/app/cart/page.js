export default function Cart() {
    return (
      <div>
        <h4 className="title">하이테크 주차장 현황</h4>
        <div className="cart-item">
          <p>주차장이름</p>
          <p>여석</p>
          <p>전체좌석</p>
        </div>
        
        <CartItem/>
  
        <div className="high">
        <img src="/high1.png" className="park1-img" />
          {Array.from({ length: 9 }, (_, index) => (
            <img key={index} src="/green1.png" alt={`주차장 이미지 ${index + 1}`} className="green1-img" />
          ))}
        </div>
      </div>
    );
  }
  
  function CartItem() {
    return (
      <div className="cart-item">
        <p>하이테크 주차장</p>
        <p>n칸</p>
        <p>9칸</p>
      </div>
    );
  }
  