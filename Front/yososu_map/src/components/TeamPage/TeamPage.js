
import React, { useState } from "react";
import './TeamPage.css'

const TeamPage = () => {

  const [isHovering, setIsHovering] = useState(false);

  const memberInfo = [
    {
      id : 1,
      memoticon : 'img/sanghoon.png',
      name : 'Lee Sanghoon',
      roll : 'Web Developer',
      github : 'https://github.com/kebin0613',
      velog : 'https://velog.io/@realdevelope'
    }, {
      id : 2,
      memoticon : 'img/seungwan.png',
      name : 'Ryu Seungwan',
      roll : 'Web Developer',
      github : 'https://github.com/seungwanRyu01',
      velog : 'https://velog.io/@yuuuuuuuuu'
    }, {
      id : 3,
      memoticon : 'img/jisu.png',
      name : 'Lee Jisu',
      roll : 'Web Developer',
      github : 'https://github.com/sue6e2',
      velog : 'https://velog.io/@sue6e2'
    }, {
      id : 4,
      memoticon : 'img/taekyu.png',
      name : 'Park Taekyu',
      roll : 'Web Developer',
      github : 'https://github.com/Bigjade97',
      velog : 'https://velog.io/@sue6e2'
    }
  ]

  const renderInfo = memberInfo.map(info =>{
    return(
        <div className="Member" key = {info.id}>
          <div className="MemberImg"
            onMouseEnter={(event)=>{
              setIsHovering(true);
            }}
            onMouseLeave={()=>setIsHovering(false)}>
            <a href = "#">
              <img src={info.memoticon} width="200" />
            </a>
            <div id = {`Member${info.id}`}>
              <div className={`TeamPage ${isHovering ? 'SocialIcon' : 'SocialIconHide'}`}>
              dfdfddfas;jklfal;ksdhfaldfjalk;fhal;kshs
              </div>
            </div>
          </div>
          <div className = "discription">
            <ul>
              <li>{info.name}</li>
              <li>{info.roll}</li>
            </ul>
          </div>
        </div>
    )
  })

  return (
    <div>
      <h2>Our Team Member</h2>
      <div className="MemberInfo d-flex">
        {renderInfo}
      </div>
    </div>
  )
}

export default TeamPage
