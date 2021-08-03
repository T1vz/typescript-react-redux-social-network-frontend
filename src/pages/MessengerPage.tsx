import React, {FC} from 'react'

const MessengerPage: FC = () => {
    return (
        <div>
            <div>
                <div>
                    <img alt='ava' style={{width: '60px', height: '60px'}} src="https://html5css.ru/w3css/img_avatar3.png"/>
                    <p>T1vz</p>
                    <p>T1vz: Hello, my friend!</p>
                </div>
                <div>
                    <img alt='ava' style={{width: '60px', height: '60px'}} src="https://html5css.ru/w3css/img_avatar3.png"/>
                    <p>avbevz</p>
                    <p>Me: Hi, send me a money, pls!</p>
                </div>
            </div>
            <div>
                <div>
                    <img alt='ava' style={{width: '30px', height: '30px'}} src="https://html5css.ru/w3css/img_avatar3.png"/>
                    <p>T1vz</p>
                    <p>T1vz: Hello, my friend!</p>
                </div>
                <div>
                    <textarea/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default MessengerPage