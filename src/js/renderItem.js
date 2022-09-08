export function renderItem(items) {
    const block = document.querySelector('.gallery')

    block.insertAdjacentHTML('beforeend', `
    <div class="gallery-item">
                <h2 class="gallery-title">${items.title}</h2>
                <img class="gallery-img" src="${items.src}" alt="img">
            </div>
    `)
}