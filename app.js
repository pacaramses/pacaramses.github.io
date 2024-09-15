// document.addEventListener("DOMContentLoaded",()=>{
//     const images = document.querySelectorAll("img");
        // Looking through all images.

        // Then fetch images:
    const accessKey="7H37-MWp7VszNwmE6XXCfs0zjlqIm6Cn0Pu2SGva8rE"
    // for(const image of images){
        fetch("https://api.unsplash.com/photos/random?query=alpaca&client_id=$7H37-MWp7VszNwmE6XXCfs0zjlqIm6Cn0Pu2SGva8rE")
        .then(response=>response.json())
        .then(data=>{
            const daily_img = data.urls.regular;
            document.getElementById(daily_img).src=imageUrl;})