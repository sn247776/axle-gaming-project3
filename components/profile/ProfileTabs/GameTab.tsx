import React from 'react'

function GameTab() {
  return (
    <div>
            <div className=' grid grid-cols-2 pt-5 gap-4'>
      {
        games.map((game,index)=>(
          <div key={index}
               className=' relative w-[15rem] h-[18rem] overflow-hidden'>
                <img
                 style={{WebkitClipPath:'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 4%)'}}
                 className=' w-[90%] h-[90%] top-0 left-0 '
                 src={game.image}
                />
                <div className=' absolute left-0 bottom-5 z-10 h-[50%] w-[90%] bg-gradient-to-t from-white to-transparent'/>
                
            <div
             style={{WebkitClipPath:"polygon(88% 61%, 87% 0, 95% 0, 100% 5%, 100% 92%, 91% 100%, 5% 100%, 0 96%, 0 61%)"}}
             className=' bottom-0 right-0 w-full h-[90%] bg-[#171621] absolute z-20'>
             <div className='absolute bottom-0 h-[39%] w-full left-0 pl-2 pr-4 flex flex-col justify-evenly'>
              <div className=' flex w-full justify-between'>
                <p className=' text-[#fff] font-bold text-[1rem] truncate text-ellipsis w-[80%] '>{game.name}</p>
                <p className=' border rounded-md w-fit h-fit p-[.2rem] text-[.4rem] items-center flex text-yellow-300 border-yellow-400 '>{game.platform}</p>
              </div>
              <div>
                {
                  game.is_free ? 
                  <div className=' border rounded-md w-fit p-1 text-[.8rem] border-purple-400'>
                    Free to Play
                  </div> :
                  <div className=' flex border rounded-md w-fit p-1 text-[.8rem] border-yellow-400'>
                    <p className=' text-yellow-400'>Price:{' '}</p>
                    <p className=' text-yellow-200'>{game.price}</p>
                  </div>
                }
              </div>
              <div className=' flex gap-1 flex-wrap w-[85%]'>
                {
                  game.genre.map((genre,gi)=>(
                    <div className=' rounded-xl bg-purple-500 w-fit px-2 h-[1.0rem] text-[.6rem]'>
                      {genre}
                    </div>
                  ))
                }
              </div>
             </div>
             <div className=' absolute bottom-0 right-0 w-full'>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[18%] rounded-xl right-[.4rem] bottom-[1.7rem] '/>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[10%] rounded-xl right-[.4rem] bottom-[1.1rem] '/>
             </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default GameTab

const games = [{"name":"Calypso - Pineapple Passion","image":"http://dummyimage.com/311x305.png/dddddd/000000","is_free":false,"price":915.51,"discount":"50%","end_date":"2023-12-25T00:01:18Z","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","currency":[{"logo":"http://exblog.jp/aliquet.js?euismod=sem&scelerisque=praesent&quam=id&turpis=massa&adipiscing=id&lorem=nisl&vitae=venenatis&mattis=lacinia&nibh=aenean&ligula=sit&nec=amet&sem=justo&duis=morbi&aliquam=ut&convallis=odio&nunc=cras&proin=mi&at=pede&turpis=malesuada&a=in&pede=imperdiet&posuere=et&nonummy=commodo&integer=vulputate&non=justo&velit=in&donec=blandit&diam=ultrices&neque=enim&vestibulum=lorem&eget=ipsum&vulputate=dolor&ut=sit&ultrices=amet&vel=consectetuer&augue=adipiscing&vestibulum=elit&ante=proin&ipsum=interdum&primis=mauris&in=non&faucibus=ligula&orci=pellentesque&luctus=ultrices&et=phasellus&ultrices=id&posuere=sapien&cubilia=in&curae=sapien&donec=iaculis&pharetra=congue&magna=vivamus&vestibulum=metus&aliquet=arcu&ultrices=adipiscing&erat=molestie&tortor=hendrerit&sollicitudin=at&mi=vulputate&sit=vitae&amet=nisl&lobortis=aenean&sapien=lectus&sapien=pellentesque&non=eget&mi=nunc&integer=donec&ac=quis&neque=orci&duis=eget&bibendum=orci&morbi=vehicula&non=condimentum&quam=curabitur&nec=in&dui=libero&luctus=ut&rutrum=massa","amount":792.75,"color":"#e35710"}],"short_description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","genre":["platformer","simulation"],"rating":4.6,"platform":"mobile","engagement":3421.0},
{"name":"Longos - Chicken Wings","image":"http://dummyimage.com/286x300.png/cc0000/ffffff","is_free":false,"price":737.92,"discount":"50%","end_date":"2023-12-14T01:17:30Z","description":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","currency":[{"logo":"http://artisteer.com/pellentesque/ultrices/mattis.xml?nullam=congue&porttitor=elementum&lacus=in&at=hac&turpis=habitasse&donec=platea&posuere=dictumst&metus=morbi&vitae=vestibulum&ipsum=velit&aliquam=id&non=pretium&mauris=iaculis&morbi=diam&non=erat&lectus=fermentum&aliquam=justo&sit=nec&amet=condimentum&diam=neque&in=sapien","amount":580.01,"color":"#9b03f0"}],"short_description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.","genre":["adventure","role-playing"],"rating":3.0,"platform":"pc","engagement":2716.0},
{"name":"Yogurt - Cherry, 175 Gr","image":"http://dummyimage.com/310x312.png/ff4444/ffffff","is_free":true,"price":0,"discount":"100%","end_date":"2023-12-25T16:22:36Z","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","currency":[{"logo":"http://technorati.com/sed/interdum/venenatis/turpis/enim.aspx?sem=duis&fusce=mattis&consequat=egestas&nulla=metus&nisl=aenean&nunc=fermentum&nisl=donec&duis=ut&bibendum=mauris&felis=eget&sed=massa&interdum=tempor&venenatis=convallis&turpis=nulla&enim=neque&blandit=libero&mi=convallis&in=eget&porttitor=eleifend&pede=luctus&justo=ultricies&eu=eu&massa=nibh&donec=quisque&dapibus=id","amount":685.09,"color":"#a28bc5"}],"short_description":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","genre":["strategy"],"rating":4.9,"platform":"pc","engagement":4920.5},
{"name":"Table Cloth 72x144 White","image":"http://dummyimage.com/315x290.png/ff4444/ffffff","is_free":true,"price":0,"discount":"100%","end_date":"2023-12-20T00:49:11Z","description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","currency":[{"logo":"http://cloudflare.com/ac/nibh/fusce/lacus/purus/aliquet.html?in=interdum&tempor=eu&turpis=tincidunt&nec=in&euismod=leo&scelerisque=maecenas&quam=pulvinar&turpis=lobortis&adipiscing=est&lorem=phasellus&vitae=sit&mattis=amet&nibh=erat&ligula=nulla&nec=tempus&sem=vivamus&duis=in&aliquam=felis&convallis=eu&nunc=sapien&proin=cursus&at=vestibulum&turpis=proin&a=eu&pede=mi&posuere=nulla&nonummy=ac&integer=enim&non=in&velit=tempor&donec=turpis&diam=nec","amount":701.8,"color":"#b5f9d7"}],"short_description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","genre":["role-playing","platformer"],"rating":0.5,"platform":"pc","engagement":2994.0},
{"name":"Appetizer - Mango Chevre","image":"http://dummyimage.com/300x282.png/cc0000/ffffff","is_free":false,"price":514.79,"discount":"20%","end_date":"2023-12-07T08:55:07Z","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","currency":[{"logo":"http://miitbeian.gov.cn/sapien/iaculis.html?sodales=dolor&sed=quis&tincidunt=odio&eu=consequat&felis=varius&fusce=integer&posuere=ac&felis=leo&sed=pellentesque&lacus=ultrices&morbi=mattis&sem=odio&mauris=donec&laoreet=vitae&ut=nisi&rhoncus=nam&aliquet=ultrices&pulvinar=libero&sed=non&nisl=mattis&nunc=pulvinar&rhoncus=nulla&dui=pede&vel=ullamcorper&sem=augue&sed=a&sagittis=suscipit&nam=nulla","amount":958.21,"color":"#f27a48"}],"short_description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","genre":["platformer","racing","simulation"],"rating":1.2,"platform":"pc","engagement":4112.5},]