const tabItems = document.querySelectorAll('.tab-items');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content items
function selectItem(e){
    removeBorder();
    removeShow();
    // Add border to current tab content
    this.classList.add('tab-border')
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach((item) => item.classList.remove("show"));
}


// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));