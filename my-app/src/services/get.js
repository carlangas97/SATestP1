const apikey = 'yyx54Zal6HS83LRYRpHEtzBr9o7miE59'


export function gets({keyword = 'cars'} = {}){
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

     return fetch(APIURL)
        .then(res => res.json())
        .then(response =>{
            const {data = []} = response
            const gifs = data.map(image =>image.images.downsized_medium.url)
            console.log(gifs)
            return gifs
        })
}

export default function getsotra({keyword = 'cars'} = {}){
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=1&offset=0&rating=g&lang=en`

    return fetch(APIURL)
        .then(res => res.json())
        .then(response =>{
            const {data = []} = response
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id, url}

            })

            console.log(gifs)
            return gifs
        })
}
