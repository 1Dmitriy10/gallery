export function renderItemSound(items) {
    const block = document.querySelector('.gallery')

    block.insertAdjacentHTML('beforeend', `
    <div class="gallery-item">
                <h2 class="gallery-title">${items.title}</h2>
               <div class="gallery-item-sound">
                    <audio
                        controls
                        src="${items.src}">
                    </audio>
               </div>
            </div>
    `)
}