document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    button.addEventListener('mouseover', () => 
    {
        button.style.left=Math.floor(Math.random()*250+1)+'px';
        button.style.top=Math.floor(Math.random()*250+1)+'px';
        
        
    
    });
});
