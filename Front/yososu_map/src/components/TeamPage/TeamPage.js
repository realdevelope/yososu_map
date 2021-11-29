
import React, { useState } from "react";
import './TeamPage.css'

const TeamPage = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [isGithub, setGithub] = useState(false);
  const [isVelog, setVelog] = useState(false);

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
      velog : 'https://velog.io/@ryu0114'
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
      velog : 'https://velog.io/@ptk1997'
    }
  ]

  const renderInfo = memberInfo.map(info =>{

    const showIcon = (props) =>{
      console.log(props);
      if(props === info.id){
        var target = document.getElementById(`Member${props}`);
        target.style.opacity = '1';
        console.log(target);
      }
    }

    const hideIcon = (props) =>{
      if(props === info.id){
        document.getElementById(`Member${props}`).style.opacity = '0';
      }
    }

    return(
        <div className="col-lg-3 col-md-6 col-sm-12 p-4" key = {info.id}>
          <div className="Member">
          <div className="MemberImg"
            onMouseEnter={(event)=>{
              setIsHovering(true);
              showIcon(info.id);
            }}
            onMouseLeave={(event)=>{
              setIsHovering(false);
              hideIcon(info.id);
            }}>
            <a href = "#">
              <img src={info.memoticon} width="200" />
            </a>
            <div id = {`Member${info.id}`} className="SocialIcon">
              <div>
                <div className="Icon">
                  <ul>
                    <li onMouseOver = {() => setGithub(true)}
                        onMouseLeave= {() => setGithub(false)}>
                      <a id = "GithubSrc" href={info.github} target="_blank">
                        <img className="github mx-2" src ={isGithub ? "img/github_mouseover.png" : "img/github_white.png"} width="30px" />
                      </a>
                    </li>
                    <li onMouseOver = {() => setVelog(true)}
                        onMouseLeave= {() => setVelog(false)}>
                      <a id = "VelogSrc" href={info.velog} target="_blank">
                        <img className="velog mx-2" src = {isVelog ? "img/velog_mouseover.png" : "img/velog_white.png" } width="30px" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className = "discribe my-3">
            <ul>
              <li className="m-2 Title">💎 {info.name}</li>
              <li className="m-2">💻 {info.roll}</li>
            </ul>
          </div>
          </div>
        </div>
    )
  })

  return (
    <div className="mt-5">
      <h1 className="Title m-3" id="About">"Our Team Member"</h1>
      <div className="MemberInfo my-4">
        <div className="row">
          {renderInfo}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
