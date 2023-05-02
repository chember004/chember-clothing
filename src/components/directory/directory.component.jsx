import React, {useState} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'


const Directory = () => {
 const [sections, setSections] = useState([
    {
        title: 'hats',
        imageUrl: 'sample',
        size: 'small',
        id: 1
    },
    {
        title: 'jackets',
        imageUrl: 'sample',
        size: 'small',
        id: 2
    },
    {
        title: 'mens',
        imageUrl: 'sample',
        size: 'large',
        id: 3
    },
    {
        title: 'womens',
        imageUrl: 'sample',
        size: 'large',
        id: 4
    }
 ])


 return <div className='directory-menu'>
        {sections.map(({id, title, imageUrl, size}) => <MenuItem key={id} title={title} size={size}  imageUrl={imageUrl}/>)}
    </div>
}

export default Directory