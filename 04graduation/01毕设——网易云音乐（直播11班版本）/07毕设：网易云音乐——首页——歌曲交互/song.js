$(function(){
    let id= parseInt(location.search.match(/\bid=([^&]*)/)[1],10)

    $.get('./songs.json')
        .then(function(response){
            let songs = JSON.parse(response)

            //filter参数为json
            let song = songs.filter(s=>s.id === id)[0]
            let {url} = song

            let audio = document.createElement('audio')
            audio.src = url
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
})