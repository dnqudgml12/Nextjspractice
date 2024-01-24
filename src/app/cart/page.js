'use client' //이거 있으면 밑에 있는 애들 다 client컴포넌트 -> js기능 넣을 수 있음
//client컴포넌트 가 좋음
// 로딩속도 느림(js가 많이 필요). hydration도 있음 
//html유저에게 보낸후 js로 html 다시 읽고 분석하는 일

//but servercomponent는 로딩속도 빠르고 검색엔진에 좋음
// 이거 없으면 서버 컴포넌트 -> js기능 불가
//js기능 -> useState,useEffect


//큰페이지는 servercomponent, js기능 필요한 곳만 client component되면 좋음

import styled from "styled-components"

export default function Cart() {
    let 장바구니=['ABC','bcd']
    return (
      <Backdiv>
        <h4 >Cart</h4>
        <OverDiv>
        <Cartittem bucket={장바구니[0]}/>
    <Cartittem bucket={장바구니[1]}/>
    <Banner banner="롯데카드" />
        </OverDiv>
      


      </Backdiv>
    )
  }

function Cartittem({bucket}){
    return(
        <Div>
        <p>{bucket}</p>
        <p>$40</p>
        <p>1개</p>
      </Div>  
    )
}

function Banner({banner}){
    return(
        <>
        <h5>{banner}결제 행사중</h5>
        </>
    )
}

 const OverDiv=styled.div`
 width: 100%;
 height: 100%;
display : flex;
flex-direction: column;
 ` 
 
const Div=styled.div`
margin-top: 20px;
width: 100%;
padding: 10px;
display: flex;
justify-content: space-around;
border-bottom: 1px solid white;
line-height: 0px;
color: white;

`

  const Backdiv=styled.div`
display: flex;
flex-direction: column;
background-color: gray;
width: 100%;
height: 100vh;
align-items: center;
`