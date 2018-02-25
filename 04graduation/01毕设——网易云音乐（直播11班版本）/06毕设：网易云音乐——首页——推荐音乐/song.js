$(function(){
    $.get('/lyric.json')
        .then(
            function(object){
                let json = JSON.parse(object)  //将字符串转换成json
                let{lyric} = json  // 等价于 let lyric = object.lyric

                let array = lyric.split('\n')

                //正则表达式
                let regex = /^\[(.+)\](.*)$/
                array = array.map(function(string,index){
                    let matches = string.match(regex)
                    if(matches){
                        return {time:matches[1],words:matches[2]}
                    }
                })
                let $lyric = $('.lyric')
                array.map(function(object){
                    if(!object){return}
                    let $p = $('<p/>')
                    $p.attr('data-time',object.time).text(object.words)
                    $p.appendTo($lyric.children('.lines'))
                })
        })

        let audio = document.createElement('audio')
        audio.src = 'https://m10.music.126.net/20180222213917/152ef46e8ea69a79c42909f80dde11d3/' +
            'ymusic/dc26/6e63/6bde/d08add8397181cefb1014a7b09ee4a92.mp3'

        audio.oncanplay = function(){
            audio.play()
            $('.disc-container').addClass('playing')
        }
        $('.icon-pause').on('click',function(){
            audio.pause()
            $('.disc-container').removeClass('playing')
        })
        $('.icon-play').on('click',function(){
            audio.play()
            $('.disc-container').addClass('playing')
        })
})