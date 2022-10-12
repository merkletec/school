import React from 'react'
import Path from '../../img/Path 1.png'
import story1 from '../../img/story-1.jpg'
import story2 from '../../img/story-2.jpg'
import story3 from '../../img/story-3.jpg'
import story4 from '../../img/story-4.jpg'
import story5 from '../../img/story-5.jpg'
import story6 from '../../img/story-6.png'
import './Story.scss'
const Story = () => {
  return (
    <div className="mainStory">
      <div className="title">
        <h1>品牌故事 起源</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="block main-block1">
        <img src={story1} alt=""></img>
        <p>
          傳承老祖宗的智慧，選擇最天然的中草藥，由內而外的保養身體，針對不同的上班族狀態，我們調配了九種不同調理主題的漢方飲，讓中藥材變身可隨手沖泡的茶包，做好日常調理就從喝「上班族漢方飲」做起。｜精神｜助眠｜纖美｜亮妍｜明亮｜養聲｜女神｜除濕｜⽉事｜「上班族漢方飲」短短5分鐘即可在辦公室泡杯好喝又養生的漢方飲。
        </p>
      </div>

      <div className="block main-block2">
        <div className="block2-left">
          <h1>
            Who <br />
            We <br />
            Are?
          </h1>
          <h3>
            漢方輕。茶飲的創建
            <br />
            是由一群年輕人
          </h3>
          <p>
            創新思維顛覆傳統中藥型態；
            <br />
            跳脫傳統的格局羈絆，提供各式養生茶飲
          </p>
        </div>
        <div className="block2-right">
          <img src={story2} alt=""></img>
          <img src={story3} alt=""></img>
          <img src={story4} alt=""></img>
        </div>
      </div>

      <div className="block main-block3">
        <div className="block3-left">
          <img src={story5} alt=""></img>
          <img src={story6} alt=""></img>
        </div>
        <div className="block3-right">
          <h2>品牌目標</h2>
          <ul>
            <li>減少飲料攝取，培養喝水好習慣</li>
            <li>為現代人，養出健康好體質</li>
            <li>方便簡單，隨沖及喝</li>
            <li>搭起認識草本橋梁，縮小世代隔閡</li>
            <li>打破傳統思維，養生茶也可以很好喝</li>
          </ul>
        </div>
      </div>

      <div className="block main-block4">
        <h2>品牌堅持</h2>
        <ul>
          <li>
            <div className="main-block4-img-1"></div>
            <h3>純天然漢方</h3>
            <p>純天然，不添加防腐劑 不含澱粉，低熱量</p>
          </li>
          <li>
            <div className="main-block4-img-2"></div>
            <h3>在台製作</h3>
            <p>堅持在台灣製作， 真材實料看的見中藥材</p>
          </li>
          <li>
            <div className="main-block4-img-3"></div>
            <h3>推廣中藥知識</h3>
            <p>搭起認識中藥橋梁， 將漢方融入你我生活</p>
          </li>
          <li>
            <div className="main-block4-img-4"></div>
            <h3>品質保證</h3>
            <p>產品通過SGS認證， 已投保責任險</p>
          </li>
        </ul>
        <h3>用天然的草本藥材，照顧現代人的健康日常</h3>
      </div>
    </div>
  )
}
export default Story
