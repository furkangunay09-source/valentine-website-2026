

const CONFIG = {
    
    valentineName: "Hatice",

    
    pageTitle: "Benim sevgilim olur musun? 💝",

    
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    },

    
    questions: {
        first: {
            text: "Benden hoşlanıyor musun?",                                    
            yesBtn: "Evet",                                             
            noBtn: "Hayır",                                               
            secretAnswer: "Senden hoşlanmıyorum. SANA AŞIĞIMM ❤️"          
        },
        second: {
            text: "Beni ne kadar çok seviyorsunn?",                         
            startText: "Bu kadar!!!!",                                   
            nextBtn: "Sonrakii ❤️"                                         
        },
        third: {
            text: " Her şeyim olur musunnnn? 🌹", 
            yesBtn: "EEE ZATENNN",                                            
            noBtn: " Hayır"                                                 
        }
    },

    
    loveMessages: {
        extreme: "NEEE Bu kadar çok muuu? 🥰🚀💝",  
        high: "Sonsuza kadar yaniii 🚀💝",              
        normal: "Yaşasınnn 🥰"                           
    },

    
    celebration: {
        title: "Bu kadar şanslı olduğumu biliyordumm. 🎉💝💖💝💓",
        message: "Gel buraya ve Furkan'dan tatlı tatlı öpücüklerini all!!!!",
        emojis: "🎁💖🤗💝💋❤️💕" 
    },

    
    colors: {
        backgroundStart: "#ffafbd",      
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"     
    },

    
    animations: {
        floatDuration: "15s",           
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

    
    music: {
        enabled: true,                     
        autoplay: true,                    
        
        musicUrl: "aytenli.mp3", 
        startText: "🎵 Play Music",        
        stopText: "🔇 Stop Music",         
        volume: 0.5                        
    }
};


window.VALENTINE_CONFIG = CONFIG; 