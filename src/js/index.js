import '../style/style.scss'
import { renderItem } from './renderItem.js'
import { renderItemSound } from './renderItemSound.js'
import { renderItemVideo } from './renderItemVideo.js'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.gif'

import sound1 from '../assets/sound/1.mp3'
import sound2 from '../assets/sound/2.mp3'
import sound3 from '../assets/sound/3.mp3'

import video1 from '../assets/video/1.mp4'
import video2 from '../assets/video/2.mp4'

let items = [
    {
        title: 'Дом на реке',
        src: img1,
        type: "img"
    },
    {
        title: 'Горы',
        src: img2,
        type: "img"
    },
    {
        title: 'Деревня',
        src: img3,
        type: "img"
    },
    {
        title: 'гиф',
        src: img4,
        type: "img"
    },
    {
        title: 'Пение птиц',
        src: sound1,
        type: "sound"
    },
    {
        title: 'Потоки воды',
        src: sound2,
        type: "sound"
    },
    {
        title: 'Ночной лес',
        src: sound3,
        type: "sound"
    },
    {
        title: 'Самый лучший клип',
        src: video1,
        type: "video"
    },
    {
        title: 'Прибой',
        src: video2,
        type: "video"
    }
]

items.forEach(item => {
    switch (item.type) {
        case "img":
            renderItem(item)
            break;
        case "sound":
            renderItemSound(item)
            break;
        case "video":
            renderItemVideo(item)
            break;
    }
})
