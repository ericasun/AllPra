$(function(){
    setTimeout(function(){
        $.get('./songs.json').then(function(response){
            let items = JSON.parse(response)
            items.forEach((i)=>{
                let $li = $(` 
                <li>
                    <a href="./song.html?id=${i.id}">
                        <h3>${i.name}</h3>
                        <p>演唱者-专辑</p>
                        <svg class="play">
                            <use xlink:href="#icon-16"></use>  
                        </svg>
                    </a>
                </li>
            `)
                $('#lastestMusic').append($li)
            })
        $('#lastestMusicLoading').remove()
    },function(){
            alert('失败')
        })
    },100)
})