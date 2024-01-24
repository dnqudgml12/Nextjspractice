'use client'
import styled from "styled-components"
import Image from "next/image" //img 최적화 
import {data} from "@/app/data/Data"
import { useState } from "react"


export default function List(){
        // 좋아요 수를 관리하기 위한 상태를 객체로 초기화합니다.
    // 각 항목의 ID를 키로 사용하여 좋아요 수를 저장합니다.
    const [likes, setLikes] = useState({});

    // 좋아요를 증가시키는 함수
    const increaseLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: (prevLikes[id] || 0) + 1,
        }));
    };

    // 좋아요를 감소시키는 함수
    const decreaseLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: Math.max((prevLikes[id] || 0) - 1, 0), // max를 0으로
        }));
    };
    //id는 단순하게 고유의 값을 나타내기 위한 수단, id에서 부터 값이증가하는 숫자적인 의미는 아님

/*
(id) => {...}: id를 매개변수로 받는 화살표 함수입니다. id는 좋아요 수가 증가할 항목의 고유 식별자를 나타냅니다.
setLikes((prevLikes) => {...}): 이는 likes 상태를 업데이트하는 데 사용되는 setLikes 함수에 대한 호출입니다. 
setLikes는 useState 후크에 의해 제공됩니다. 함수는 이전 상태(prevLikes)를 인수로 받습니다.
{...prevLikes}: JavaScript의 스프레드 구문입니다. 

prevLikes 개체의 속성을 확산시켜 새 개체를 만드는 데 사용됩니다. 
이렇게 하면 좋아요가 증가하는 항목뿐만 아니라 새 상태 개체의 모든 항목에 대한 현재 개수를 모두 유지할 수 있습니다.
[id]: (prevLikes[id] || 0) + 1: 이 줄은 키를 항목의 id로 사용하여 개체의 속성을 생성하거나 업데이트합니다.
 prevLikes[id]가 존재하지 않으면 기본값은 0입니다(논리적 OR || 연산자 사용). 그런 다음 이 값에 '1'을 추가합니다. 결과 개체는 '좋아요' 상태를 업데이트하는 데 사용됩니다.
*/

    return(
    <div>
    <Backdiv>

    <Titlediv>여기는 홈입니다</Titlediv>
    <Contentdiv>

        {data.map((Inf)=>(
            <Box key={Inf.id}>
                 
                 <Boxouter>
                 <Img src={Inf.src}/>
                <Boxinner>
                   
                    <Boxword>{Inf.word}</Boxword>
                    <Boxprice>{Inf.price}</Boxprice>

                </Boxinner>
                <Likebutton key={Inf.id}>
                <Likebutton>
                                    <Increase onClick={() => increaseLike(Inf.id)}>+</Increase>
                                    <Count>{String(likes[Inf.id] || 0).padStart(3, '0')}</Count>
                                    {/*000에서 001,002로 됨*/}
        
                                    <Decrease onClick={() => decreaseLike(Inf.id)}>-</Decrease>
                                </Likebutton>


                </Likebutton>


                </Boxouter>

            </Box>

        ))}
    </Contentdiv>
    
    </Backdiv>
    </div>)
}

const Likebutton= styled.div`
display: flex;
flex-direction: row;
gap:10px;
width: 100%;
`
const Decrease=styled.div`
width:30px;
font-size: 14px;
`

const Increase=styled.div`
width:30px;
font-size: 14px;
`

const Count=styled.div`
width:50px;
font-size: 14px;
`
const Img= styled(Image)`

padding-left: 30px;
width:100px;
height: 60px;
margin-top: 30px;
`
const Box=styled.div`
width: 400px;
height: 250px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
`
const Boxouter=styled.div`
background-color: red;
width:100%;
height:100%;
display: flex;
flex-direction: column;

`
const Boxinner=styled.div`
background-color: blue;
width: 100%;
padding-left: 30px;
display: flex;
flex-direction: row;
gap:15px;
`
const Boxword=styled.div`
color: black;
font-size: 40px;
`

const Boxprice=styled.div`
color: black;
font-size: 50px;
`
const Backdiv=styled.div`
display: flex;
flex-direction: column;
background-color: gray;
width: 100%;
height: 100vh;
align-items: center;
`
const Contentdiv=styled.div`
margin-top:20px;
display: flex;
flex-direction: column;
gap: 30px;

`
const Titlediv=styled.div`
color: white;
font-size: 30px;
font-weight:500;
margin-top: 100px;
`

//폴더 만들면 그게 주소 값이 된다