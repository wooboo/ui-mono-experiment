
const plugin = require('tailwindcss/plugin')

function getPlugin(action){
    return function(input){
        if(typeof input === 'function'){
            
            console.log(action, input);
            return plugin((p)=>{
                const result = input(p);
                console.log(action, result);
                if(result){
                    p[action](result)
                }
            })
        }else{
            console.log(action, input);
            return plugin((p)=>{
                p[action](input)
            })
        }
    }
}


module.exports = [
    ...require('./components').map(getPlugin('addComponents')),
    ...require('./utilities').map(getPlugin('addUtilities')),
]