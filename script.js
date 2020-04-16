let     darkMode = localStorage.getItem('darkMode')
const  checkbox = document.querySelector('.btn-input')
const sliderRound = document.querySelector('.round-slider')



let trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
         document.documentElement.classList.remove('transition')
    }, 1000)

}

let enableDarkMode = () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('darkMode', 'enabled')
}

let disableDarkMode = () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('darkMode', null)
}

if(darkMode == 'enabled'){
    enableDarkMode()
}



checkbox.addEventListener('change', function(){
    darkMode = localStorage.getItem('darkMode')

    if(darkMode !== 'enabled'){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
})

