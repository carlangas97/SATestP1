const API = 'http://34.123.195.45:5000/'


export default function Datos2m({keyword = 'cars'} = {}){
    const apidatos1 = `${API}mensajes`

    return fetch(apidatos1)
        .then(res =>
            res.json()

        )
        .then(response =>{
            //console.log(response)
            const mensajes = response.map(image => {
                const {autor, nota} = image
                return {autor, nota}

            })
            //console.log('mensajes')
            //console.log(mensajes)
            return mensajes
        })
}

