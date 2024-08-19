function toggleMode(){
    const html = document.documentElement
    
    html.classList.toggle('light')
    /* toggle
    if(html.classList.contains('light')){
      html.classList.remove('light')
    } else {
      html.classList.add('light')
    }
    */
}