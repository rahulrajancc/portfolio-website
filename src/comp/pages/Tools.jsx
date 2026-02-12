import '../styles/tool.css';
import {Aarduino, Bblender, Ccss, Ddb, Eexpress, Ffirebase, Ggithub, Hhtml, Jjs, Llinux, Nnode, Ppostman, Rreact, Ssql }   from '../../Img';
export default function Tools() {
    return(
        <div id='tool_main'>
        <div id='tool_header'>
            <p>Development Tools and Technologies</p>
            <hr />

        </div>
        <div className='tools_item'>
            <div className='tools'>
                <img src={Hhtml} alt='HTML logo'/>
                <p>HTML</p>
            </div>

            <div className='tools'>
                <img src={Ccss} alt='CSS logo'/>
                <p>CSS</p>
            </div>

            <div className='tools'>
                <img src={Jjs} alt='JavaScript logo'/>
                <p>JavaScript</p>
            </div>

            <div className='tools'>
                <img src={Rreact} alt='React logo'/>
                <p>REACT</p>
            </div>

            <div className='tools'>
                <img src={Eexpress} alt='Express.js logo'/>
                <p>EXPRESS</p>
            </div>

            <div className='tools'>
                <img src={Ddb} alt='MongoDB logo'/>
                <p>MONGODB</p>
            </div>

            <div className='tools'>
                <img src={Ssql} alt='SQL logo'/>
                <p>SQL</p>
            </div>

            <div className='tools'>
                <img src={Ffirebase} alt='Firebase logo'/>
                <p>FIREBASE</p>
            </div>

            <div className='tools'>
                <img src={Ppostman} alt='Postman logo'/>
                <p>POSTMAN</p>
            </div>

            <div className='tools'>
                <img src={Ggithub} alt='GitHub logo'/>
                <p>GITHUB</p>
            </div>

            <div className='tools'>
                <img src={Bblender} alt='Blender logo'/>
                <p>BLENDER</p>
            </div>

            <div className='tools'>
                <img src={Nnode} alt='Node.js logo'/>
                <p>NODE</p>
            </div>

            <div className='tools'>
                <img src={Llinux} alt='Linux logo'/>
                <p>LINUX</p>
            </div>

            <div className='tools'>
                <img src={Aarduino} alt='Arduino logo'/>
                <p>Arduino</p>
            </div>

            
        </div>
        </div>
    )
    
};
