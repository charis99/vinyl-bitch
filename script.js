const images = [

"collage/collage-2.png", "collage/collage-3.png", "collage/collage-4.png", "collage/collage-5.png",
"collage/collage-6.png", "collage/collage-7.png", "collage/collage-8.png", "collage/collage-9.png", "collage/collage-10.png",
"collage/collage-11.png", "collage/collage-12.png", "collage/collage-13.png", "collage/collage-14.png", "collage/collage-15.png",
"collage/collage-16.png", "collage/collage-17.png", "collage/collage-18.png", "collage/collage-19.png", "collage/collage-20.png",
"collage/collage-21.png", "collage/collage-22.png", "collage/collage-23.png", "collage/collage-24.png", "collage/collage-25.png",
"collage/collage-26.png", "collage/collage-27.png", "collage/collage-28.png", "collage/collage-29.png", "collage/collage-30.png",
"collage/collage-31.png", "collage/collage-32.png", "collage/collage-33.png", "collage/collage-34.png", "collage/collage-35.png",
"collage/collage-36.png", "collage/collage-37.png", "collage/collage-38.png", "collage/collage-39.png", "collage/collage-40.png",
"collage/collage-41.png", "collage/collage-42.png", "collage/collage-43.png", "collage/collage-44.png", "collage/collage-45.png",
"collage/collage-46.png", "collage/collage-47.png", "collage/collage-48.png", "collage/collage-49.png", "collage/collage-50.png",
"collage/collage-51.png", "collage/collage-52.png", "collage/collage-53.png", "collage/collage-54.png", "collage/collage-55.png",
"collage/collage-56.png", "collage/collage-57.png", "collage/collage-58.png", "collage/collage-59.png", "collage/collage-60.png",
"collage/collage-61.png", "collage/collage-62.png"

]

let i = 0

function placeImage(x,y){
    const nextImage= images[i]
    const img = document.createElement("img")
    img.setAttribute ("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"
    img.style.transform = "scale(0.2) rotate("+ (Math.random() * 20-10) + "deg)"

    document.body.appendChild(img)

    i = i + 1
    if (i >= image.length) {
        i = 0
    }
}

document.addEventListener("click", function (event){
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event){
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})