export function renderItemVideo(items) {
    const block = document.querySelector('.gallery')

    block.insertAdjacentHTML('beforeend', `
    <div class="gallery-item">
                <h2 class="gallery-title">${items.title}</h2>
               <div class="gallery-item-video">
                    <video width="400" height="216" controls="controls">
              
                        <source src="${items.src}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
              
              
                    </video>
               </div>
            </div>
    `)
}