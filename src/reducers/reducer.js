import event1 from './img/event1.jpg'
import event2 from './img/event2.jpg'
import event3 from './img/event3.jpg'
import event4 from './img/event4.jpg'
import event5 from './img/event4.jpg'
import event6 from './img/event4.jpg'

let stateinitial=[{
    img:event1,
    title:'Public Speaking',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  
  },
  {
    img:event2,
    title:'Effectif communication',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  },
  {
    img:event3,
    title:'Public Speaking',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  },
  {
    img:event4,
    title:'Public Speaking',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  },
  {
    img:event5,
    title:'Public Speaking',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  },{
    img:event6,
    title:'Public Speaking',
    text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
    time:'Last updated 3 mins ago',
    id:Math.round(Math.random()*100),
    participer:false
  }]
const Listevent=(state=stateinitial,action)=>{
   
    switch(action.type){
        case'ADD-CONTACT':
        // console.log(this.props.Listevent)
        return state.concat(action.event) 
        // case'REMOVE-CONTACT':
        // return state.filter((el,index)=>action.id!==el.id)
        case'PARTICIPER':
        // console.log(this.props.Listevent)
        // return state.map((el,i)=>el.id===action.participer.id?action.participer:el)
        // return state.concat(action.participer) 
          return (
              // state.filter(el =>( el.id !== action.cin)?action.cin:el )
              [...state,{cin:action.cin}]
          )
        
        default:
            return state
    }
}
export default Listevent
