import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="AppHeader"> 
      <img src = "https://roubitdev.s3.ap-northeast-2.amazonaws.com/filepath/logo.png" alt ="이미지 로드 실패 "/>
      <li>ROUBIT</li>
      </div>
      <div className="AppBody"> 
      <div className="valid_Body">
        <h1 className = "Input_description">쿠폰번호 입력</h1>
        <div className="name"><span className="sname">닉네임</span><input className="name_input"></input></div>
        <div className="birthday"><span className="sbirth">생년월일</span><input className="birthday_input"></input></div>
        <div className="validate_div">  <button className="validate_btn">본인확인</button> </div>
      <div className="birthday_description"><div>*닉네임,생년월일 확인방법: [앱 - 설정탭 - 마이페이지 - 회원정보수정]</div></div>
      <hr></hr>
      </div>
      <div className="valid_Coupon">
        <div className="coupon"><span className="scoupon">쿠폰번호</span> <input className="coupon_input"></input></div>
        <div className="submit_div"><button className="submit_btn">적용하기</button></div>
      </div>
      <div className="attention">
        <p className="attention-Body">1. 생년월일이 일치해야 확인 가능합니다.<br></br>
                       생년월일을 회원가입 시 입력하지 않았다면 입력해 주세요. <br></br>
    [앱 - 설정 탭 - 마이페이지 - 회원정보 수정]<br></br>
    <br></br>
2. 이용권 적용이 안되거나 이용 중 문제가 생겼다면 [문의 링크]로 문의 부탁드립니다.<br></br>
<br></br>
3. 구글 정기결제, 무료체험 중에는 이용권 적용이 불가능합니다. <br></br>
    정기결제 해제 후 적용해 주세요.</p>
      </div>
      </div>
    </div>
  );
}

export default App;
