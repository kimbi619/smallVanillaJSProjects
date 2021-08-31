
const form = document.querySelector('form')
const search = document.querySelector('.search')
const list = document.querySelector('.list')

const apiURL = 'https://api.lyrics.ovh';
const getSong=async(songTitle)=>{
    const res = await fetch(`${apiURL}/suggest/${songTitle}`);
    const data = await res.json();
    console.log(res);
}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchedSong = search.value.trim();
    getSong(searchedSong);
})