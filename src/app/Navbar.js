'use client'
import styled from "styled-components"
import Link from "next/link"
export default function Navbars(){
    <>
<Navbar>
<Linkto href="/">홈</Linkto>
<Linkto href="/list">List</Linkto>

       </Navbar>
       </>}

const Navbar=styled.div`
display: flex;
flex-direction: row;
width: 100%;

background-color: white;

gap: 20px;


`
const Linkto= styled(Link)`
padding: 20px;
text-decoration: none;
color: blue;

`