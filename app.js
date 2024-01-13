document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    button.addEventListener('mouseover', () => 
    {
        button.style.left=Math.floor(Math.random()*90+1)+'%';
        button.style.top=Math.floor(Math.random()*90+1)+'%';
        
        
    
    });
});
