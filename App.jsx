import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/section2'

const App = () => {

  const users = [
     {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied'
     },
     {
       img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Underserved'
     },
     {
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VSZvsFsmc48x4LYCEvUZWhO53rrEPlsbvyWcKsa9m_9yn5_2PM5bwyPi&s=10',
      intro:'',
      tag:'UnderBanked'
     },
      {
       img:'https://img.magnific.com/premium-vector/man-working-laptop-from-office_1108340-892.jpg',
      intro:'',
      tag:'Ranked'
     },
     {
      img:'https://www.ikea.com/ext/ingkadam/m/60a4d86c228421d3/original/PH200337.jpg',
      intro:'',
      tag:'DeskInfo'
     }
    ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
