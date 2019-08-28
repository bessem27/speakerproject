
import React, { Component } from 'react'
import Date from './dayshedule'
import Itemshedule from './itemshedule';
export default class Shedule extends Component{

        render(){
            const {item} = this.props
            const {date} =this.props
          return (

       
        <section id="schedule" className="section-with-bg">
          <div className="container">
            <div className="section-header">
              <h2>Event Schedule</h2>
              <p>Here is our event schedule</p>
            </div>
            <ul className="nav nav-tabs" role="tablist">
            { date.map((el,i) => <li className="nav-item"><Date key={i} event={el}/></li>)
          }
          </ul>
            <h3 className="sub-heading">We are currently hard at work to build an exciting social programme for your stay in Helsinki. This will include formal and informal side events, dinners, sauna visits and an after party. Stay tuned! More information will come in the next couple of months!</h3>
            <div className="tab-content row justify-content-center">
              {/* Schdule Day 1 */}
              <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="">
                { item.map((el,i) => <div className="row shedule-item"><Itemshedule key={i} event={el}/></div>)}
            </div>
            </div>
            </div>   
        </section>
        
          )
        }}
//         var NewComponent = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <section id="schedule" className="section-with-bg">
//           <div className="container wow fadeInUp">
//             <div className="section-header">
//               <h2>Event Schedule</h2>
//               <p>Here is our event schedule</p>
//             </div>
//             <ul className="nav nav-tabs" role="tablist">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
//               </li>
//             </ul>
//             <h3 className="sub-heading">We are currently hard at work to build an exciting social programme for your stay in Helsinki. This will include formal and informal side events, dinners, sauna visits and an after party. Stay tuned! More information will come in the next couple of months!</h3>
//             <div className="tab-content row justify-content-center">
//               {/* Schdule Day 1 */}
//               <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>09:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>MyData Initiatives Networking <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>10:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Health Workshop Part I <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>11:15 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Health Workshop Part II <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>14:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Open Space 1 <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>16:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Open Space 2 <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//               </div>
//               {/* End Schdule Day 1 */}
//               {/* Schdule Day 2 */}
//               <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>10:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Thursday AM Plenary<span>NON DE PERSONNE</span></h4>
//                     <p> Main Stage / HALL A</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>11:15 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Ethical Resilient Smart Cities <span>NON DE PERSONNE</span></h4>
//                     <p> Hall F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>13:30 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Cities Roadmap <span>NON DE PERSONNE</span></h4>
//                     <p> Hall F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>15:15 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Consent In Action <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>17:00</time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Portability Governance <span>NON DE PERSONNE</span></h4>
//                     <p> HALL F </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>18:30</time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Thursday PM Plenary <span>NON DE PERSONNE</span></h4>
//                     <p>Main Stage / HALL A</p>
//                   </div>
//                 </div>
//               </div>
//               {/* End Schdule Day 2 */}
//               {/* Schdule Day 3 */}
//               <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>09:00 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>GDPR 1 Year on:<br />What's Next for th...<br /> <span>NON DE PERSONNE</span></h4>
//                     <p>Main Stage / Hall A </p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>10:15 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Cooperative Healthvare And Research <span>NON DE PERSONNE</span></h4>
//                     <p>Hall F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>11:45 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Japanese Data Banks <span>NON DE PERSONNE</span></h4>
//                     <p>HALL F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>14:30 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Anticipating Personal Data in Live Event <span>NON DE PERSONNE</span></h4>
//                     <p>HALL F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>16:15 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Experiencial Landskape <span>NON DE PERSONNE</span></h4>
//                     <p>HALL F</p>
//                   </div>
//                 </div>
//                 <div className="row schedule-item">
//                   <div className="col-md-2"><time>17:45 </time></div>
//                   <div className="col-md-10">
//                     <div className="speaker">
//                       <img src alt="" />
//                     </div>
//                     <h4>Friday PM Plenary <span>NON DE PERSONNE</span></h4>
//                     <p>Main Stage / HALL A</p>
//                   </div>
//                 </div>
//               </div>
//               {/* End Schdule Day 3 */}
//             </div>
//           </div>
//         </section>
//         {/*==========================
//       Venue Section
//     ============================*/}
//         <section id="venue" className="wow fadeInUp">
//           <div className="container-fluid">
//             <div className="section-header">
//               <h2>Event Venue</h2>
//               <p>Event venue location info and gallery</p>
//             </div>
//             <div className="row no-gutters">
//               <div className="col-lg-6 venue-map">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7939.65499872499!2d24.9676565!3d60.1656067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8cab70bfa25b002!2sWanha+Satama!5e0!3m2!1sen!2stn!4v1566297821162!5m2!1sen!2stn" frameBorder={0} style={{border: 0}} allowFullScreen />
//               </div>
//               <div className="col-lg-6 venue-info">
//                 <div className="row justify-content-center">
//                   <div className="col-11 col-lg-8">
//                     <h3> Wanha Satama, <br />
//                       central Helsinki,Finland<br /></h3>
//                     <p> the Conference provides 2+1 days of interactive sessions, networking opportunities and inspirations that shall contribute to rebuilding trust and creating more transparent and prosperous digital society.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid venue-gallery-container">
//             <div className="row no-gutters">
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img1.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img1.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img2.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img2.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img3.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img3.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img4.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img4.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img5.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img5.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img6.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img6.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img7.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img7.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-4">
//                 <div className="venue-gallery">
//                   <a href="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img8.jpg" className="venobox" data-gall="venue-gallery">
//                     <img src="C:\Users\bessem\Desktop\final project\go-my-code-project\pictures\wanha satama\img8.jpg" alt="" className="img-fluid" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// });        
            
            
            
            
