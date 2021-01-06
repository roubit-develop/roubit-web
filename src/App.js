import './App.scss';
import React,{ useState} from 'react';
import {gql,useMutation} from '@apollo/client'
import moment from 'moment';

function App() {
  const validateCoupon = gql` mutation validateCoupon($name:String!,$birthday:DateTime!,$coupon:String!){ validateCoupon(name:$name,birthday:$birthday,coupon:$coupon)
  }` ;
  const [inputs,setInputs] = useState({
    name:"",
    birthday:"",
    coupon:"",
  })
  const[validate,{loading}] = useMutation(validateCoupon)
  const {name,birthday,coupon} = inputs;
  const handleChange= (e)=>{
    const {value,name} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const temp = async()=>{
   const {data} =await validate({variables:{name,birthday:new Date(moment(birthday).format('YYYY-MM-DD')).toDateString(),coupon}});
console.log(data)
   return data
  }
  const onClick = async()=>{
    if(birthday.length===8&&coupon.length===14){
      const data = await temp()
      alert(data?.validateCoupon)}
      
      // if(data?.validateCoupon=="이미 등록된 쿠폰이 있음."){
      //   if(confirm("쿠폰을 추가로 등록 하시겠습니다?")){ // 확인시 새로운 mutation > add coupon 날리기 ! 
      //     muta
      //   }
      // }
      // else{
      //   alert(data?.validateCoupon)
      // }
    // }
    else{
      alert("쿠폰 또는 생년월일 입력이 잘못 되었습니다.")
    }

  }
  return (
    <div className="App">
      <div className="AppHeader"> 
      <img src = "https://roubitdev.s3.ap-northeast-2.amazonaws.com/filepath/logo.png" alt ="이미지 로드 실패 "/>
      <li>ROUBIT</li>
      </div>
      <div className="AppBody"> 
      <div className="valid_Body">
        <h1 className = "Input_description">쿠폰번호 입력</h1>
        <div className="name"><span className="sname">닉네임</span><input className="name_input" name ="name" onChange={handleChange} value={name}/></div>
        <div className="birthday"><span className="sbirth">생년월일</span><input className="birthday_input" name = "birthday" onChange={handleChange} value={birthday} placeholder="YYYYMMDD"/></div>
      <div className="birthday_description"><div>*닉네임,생년월일 확인방법: [앱 - 설정탭 - 마이페이지 - 회원정보수정]</div></div>
      <hr></hr>
      </div>
      <div className="valid_Coupon">
        <div className="coupon"><span className="scoupon">쿠폰번호</span> <input className="coupon_input" name ="coupon" onChange={handleChange} value={coupon}/></div>
        <div className="submit_div"><button className="submit_btn" onClick={onClick}>적용하기</button></div>
      </div>
      <div className="attention">
        <h1>이용권 안내</h1>
        <p className="attention-Body">1. 생년월일이 일치해야 확인 가능합니다.<br></br>
                       생년월일을 회원가입 시 입력하지 않았다면 입력해 주세요. <br></br>
 <br></br>
    [앱 - 설정 탭 - 마이페이지 - 회원정보 수정]<br></br>
    <br></br>
2. 이용권 적용이 안되거나 이용 중 문제가 생겼다면 <a href="https://open.kakao.com/o/gc3XuKlc">문의 링크</a>로 문의 부탁드립니다.<br></br>
<br></br>
3. 구글 정기결제, 무료체험 중에는 이용권 적용이 불가능합니다. <br></br>
    정기결제 해제 후 적용해 주세요.<br></br ><br></br>
    ※이 페이지는 모바일 환경에 최적화되어있습니다.</p>
      </div>
      </div>
    </div>
  );
}

export default App;
