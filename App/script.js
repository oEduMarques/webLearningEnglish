document.querySelectorAll('.accordion-item-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-item-content');
        
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = 0;
        } else {
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-item-content').style.maxHeight = 0;
            });
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
    });
});
