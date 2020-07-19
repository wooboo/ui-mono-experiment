
const plugin = require('tailwindcss/plugin')

function getPlugin(action){
    return function(input){
        if(typeof input === 'function'){
            
            return plugin((p)=>{
                const result = input(p);
                if(result){
                    p[action](result)
                }
            })
        }else{
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