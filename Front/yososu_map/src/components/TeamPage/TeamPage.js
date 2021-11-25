
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

    const showIcon = (props) =>{
      console.log(props);
      if(props === info.id){
        console.log(document.getElementById(`Member${props}`));
        document.getElementById(`Member${props}`).style.display = 'block';
      }
    }

    const hideIcon = (props) =>{
      if(props === info.id){
        document.getElementById(`Member${props}`).style.display = 'none';
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
                    <li>
                      <a id = "GithubSrc" href={info.github}>
                        <img className="github mx-2" src = "img/github_white.png" width="30px" />
                      </a>
                    </li>
                    <li>
                      <a id = "VelogSrc" href={info.velog} target="_blank">
                        <img className="velog mx-2" src = "img/velog_white.png" width="30px" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className = "discribe my-3">
            <ul>
              <li>{info.name}</li>
              <li>{info.roll}</li>
            </ul>
          </div>
          </div>
        </div>
    )
  })

  return (
    <div>
      <h2>Our Team Member</h2>
      <div className="MemberInfo my-4">
        <div className="row">
          {renderInfo}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
