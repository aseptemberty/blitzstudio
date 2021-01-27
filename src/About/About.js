import './About.scss'
import Jason_Wood from '../images/Jason_Wood.png'

function About() {
   return (
       <div className='About' id='About'>
           <div>
               <img src={Jason_Wood} alt={'Jason_Wood'}/>
           </div>
           <div>
               <h3>About me</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
               <p>Jason Wood</p>
           </div>
       </div>
   )
}

export default About;