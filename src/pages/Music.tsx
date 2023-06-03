import React from 'react'
import styled from 'styled-components'
import Top from '../components/Top'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
  
`

const MusicData = [
  {
    id:1,
    title:"片頭曲",
    name:"〈混合堅果〉",
    link:"https://www.youtube.com/embed/CbH2F0kXgTY"
  },
  {
    id:2,
    title:"片頭曲",
    name:"〈SOUVENIR〉",
    link:""
  },
  {
    id:3,
    title:"片頭曲",
    name:"〈混合堅果〉",
    link:""
  },
  {
    id:4,
    title:"片頭曲",
    name:"〈混合堅果〉",
    link:""
  },
  {
    id:5,
    title:"插入曲",
    name:"〈混合堅果〉",
    link:""
  },
  {
    id:6,
    title:"插入曲",
    name:"〈混合堅果〉",
    link:""
  },
  {
    id:7,
    title:"插入曲",
    name:"〈混合堅果〉",
    link:""
  },
  {
    id:8,
    title:"插入曲",
    name:"〈混合堅果〉",
    link:""
  }
]

interface data{
  id:number;
  title:string;
  name:string;
  link:string;
}

const Music = () => {
  // const Musics = Music.map(()=>
  // );
  return (
    <Container
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1, ease:'easeOut' }}
    >
      {MusicData.map((data:data)=>{
            return(
                <Card key={data.id} >
                    <div>{data.title}</div>
                    <div>{data.name}</div>
                    <iframe width="600" height="336" src={data.link} frameBorder="0" allow='autoplay;' allowFullScreen></iframe>
                </Card>
            )
        })}
      <Top />
    </Container>
  )
}

export default Music