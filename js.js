let quotes=[
    {quore:'خداوند همه چیز را در یک روز نیافرید. پس چه چیز باعث شد که من بیندیشم می‌توانم همه چیز را در یک روز به دست بیاورم؟',
    sp:'چارلی چاپلین'
    },
    {quore:'به محض اینکه کاری در جهت منافع کسی انجام می‌دهید، نه تنها او به شما فکر می‌کند بلکه خداوند نیز به شما فکر می‌کند.',
    sp:'پاراما هانسا یوگاناندا'
    },
    {quore:'برای اجتناب از بحران می توانید از سیاست سکوت استفاده کنید.',
        sp:'سوزان کوئیلیام'
        },
    {quore:'زن و شوهر باید سعی کنند شکایت هایشان را به درخواست تبدیل کنند.',
     sp:' کلارک وارن'
    },
    {quore:'دوست داشتن یک نفر یعنی دیدن او به همان شکلی که خداوند اراده کرده است.',
        sp:'داستایوفسکی'
        },
        {quore:'ازدواج مثل بازار رفتن است تا پول و احتیاج و اراده نداری بازار نرو.',
        sp:' چارلی چاپلین'
        },
        {quore:'شما هم می‌توانید هر کاری را که دوست دارید، بکنید؛ اگر فقط باور کنید که می‌توانید.',
            sp:'جک کانفیلد'
            },
        {quore:'آگر کسی همسر خود را به صورتی که آرزو دارد انتخاب نکند،دو نفر را بدبخت کرده است.',
         sp:'حجازی'
        }
]

const paragraph = document.getElementById('quote')
const paragraphSP = document.getElementById('speaker')

function shownext(){
    const randomN= Math.floor( Math.random() * quotes.length)
    paragraph.innerText = quotes[randomN].quore
    paragraphSP.innerText = '"'+quotes[randomN].sp+'"'

} 