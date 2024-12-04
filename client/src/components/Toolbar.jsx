import { Link } from 'react-router-dom';

import ColorPicker from './ColorPicker'
import PencilSlider from './PencilSlider'
import Blur from './Blur'

import DownloadButton from './DownloadButton'
import UploadButton from './UploadButton'

const Toolbar = ({ setPencilWidth, setPencilColor, setBlur, blur, setImage }) => {
        
    return (
        <>
            <div className='h-screen w-72 py-3 gap-3 flex flex-col items-center opacity-80 bg-violet-300'>
                <Link to="/"><h1 className='uppercase font-extrabold text-violet-900 bg-violet-400 rounded-xl p-3'>Blurry</h1></Link>
                <ColorPicker setPencilColor={setPencilColor}/>
                <PencilSlider setPencilWidth={setPencilWidth}/>
                <Blur setBlur={setBlur}/>
                <DownloadButton blur={blur}/>
                <UploadButton setImage={setImage}/>
            </div>
        </>
  )
}

export default Toolbar