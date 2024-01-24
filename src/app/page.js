'use client'
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";



export default function Home() {
  let name='park'
  return (
    <div>
<Backdiv>

  
  <p>{name}</p>

</Backdiv>
</div>
  );
}

const Backdiv=styled.div`
display: flex;
flex-direction: column;
background-color: gray;
width: 100%;
height: 100vh;
align-items: center;
`
