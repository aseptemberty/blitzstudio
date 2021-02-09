import './Top.scss'
import Menu from '../Menu/Menu'
import Scroll from "../Scroll/Scroll";

function Top(){
    return(
        <div className='Top'>
            <Menu />
            <Scroll
                text='scroll down to see more'
            />
        </div>
    )

}

export default Top;