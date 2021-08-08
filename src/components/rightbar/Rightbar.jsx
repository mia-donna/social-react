import "./rightbar.css";

export default function Rightbar() {
    return (
        <div classname="rightbar">
            <div className="rightbarWrapper">
               <div className="birthdayContainer">
                <img src="assets/gift.png" alt="" className="birthdayImg"/>
                <span className="birthdayText"> <b>Tom MacIntyre</b> and <b>3 other friends</b> have a birthday today
                </span>
               </div>
               <img src="assets/ad.png" alt="" className="rightbarAd"/>
               <h4 className="rightbarTitle">Online Friends</h4>
               <ul className="rightbarFriendList">
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">Sarah Jane</span>
                   </li>
               </ul>
            </div>    
        </div>
    )
}
