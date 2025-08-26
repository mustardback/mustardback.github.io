
const p1char = document.getElementById('p1')
const p2char = document.getElementById('p2')
const p1name = document.getElementById('n1')
const p2name = document.getElementById('n2')
const p1super = document.getElementById('s1')
const p2super = document.getElementById('s2')
const yeoaud = document.getElementById('yeoaud');
const clickaud = document.getElementById('clickaud');
const shutaud = document.getElementById('shutaud');

const charSrcs = [
    {name: 'Gouki', tpath: 'images/akuma.png', spath: 'images/akumasel.png', supers: ['SAI: Messatsu Gou Hadou', 'SAII: Messatsu Gou Shoryu', 'SAIII: Messatsu Gou Rasen']},
    {name: 'Alex', tpath: 'images/alex.png', spath: 'images/alexsel.png', supers: ['SAI: Hyper Bomb', 'SAII: Boomerang Raid', 'SAIII: Stun Gun Headbutt']},
    {name: 'Chun-Li', tpath: 'images/chunny.png', spath: 'images/chunnysel.png', supers: ['SAI: Kiko Sho', 'SAII: Houyoku Sen', 'SAIII: Tensei Ranka']},
    {name: 'Dudley', tpath: 'images/dudley.png', spath: 'images/dudleysel.png', supers: ['SAI: Rocket Uppercut', 'SAII: Rolling Thunder', 'SAIII: Corkscrew Blow']},
    {name: 'Elena', tpath: 'images/elena.png', spath: 'images/elenasel.png', supers: ['SAI: Spinning Beat', 'SAII: Brave Dance', 'SAIII: Healing']},
    {name: 'Hugo', tpath: 'images/hugo.png', spath: 'images/hugosel.png', supers: ['SAI: Gigas Breaker', 'SAII: Megaton Press', 'SAIII: Hammer Mountain']},
    {name: 'Ibuki', tpath: 'images/ibuki.png', spath: 'images/ibukisel.png', supers: ['SAI: Kasumi Suzaku', 'SAII: Yoroi Doushi', 'SAIII: Yami Shigure']},
    {name: 'Ken', tpath: 'images/ken.png', spath: 'images/kensel.png', supers: ['SAI: Shoryu Reppa', 'SAII: Shinryu Ken', 'SAIII: Shippu Jinrai Kyaku']},
    {name: 'Makoto', tpath: 'images/makoto.png', spath: 'images/makotosel.png', supers: ['SAI: Seichusen Godanzuki', 'SAII: Abare Tosanami', 'SAIII: Tanden Renki']},
    {name: 'Necro', tpath: 'images/necro.png', spath: 'images/necrosel.png', supers: ['SAI: Electric Storm', 'SAII: Slam Dance', 'SAIII: Electric Snake']},
    {name: 'Oro', tpath: 'images/oro.png', spath: 'images/orosel.png', supers: ['SAI: Kishin Riki', 'SAII: Yagyou Dama', 'SAIII: Tengu Stone']},
    {name: 'Q', tpath: 'images/q.png', spath: 'images/qsel.png', supers: ['SAI: Critical Combo Attack', 'SAII: Deadly Double Combination', 'SAIII: Total Destruction']},
    {name: 'Remy', tpath: 'images/remy.png', spath: 'images/remysel.png', supers: ['SAI: Light of Justice', 'SAII: Supreme Rising Rage', 'SAIII: Blue Nocturne']},
    {name: 'Ryu', tpath: 'images/ryu.png', spath: 'images/ryusel.png', supers: ['SAI: Shinku Hadoken', 'SAII: Shin Shoryuken', 'SAIII: Denjin Hadoken']},
    {name: 'Sean', tpath: 'images/sean.png', spath: 'images/seansel.png', supers: ['SAI: Hadou Burst', 'SAII: Hyper Tornado', 'SAIII: Shoryu Canon']},
    {name: 'Twelve', tpath: 'images/twelve.png', spath: 'images/twelvesel.png', supers: ['SAI: X.N.D.L.', 'SAII: X.F.L.A.T.', 'SAIII: X.C.O.P.Y.']},
    {name: 'Urien', tpath: 'images/urien.png', spath: 'images/uriensel.png', supers: ['SAI: Tyrant Slaughter', 'SAII: Temporal Thunder', 'SAIII: Aegis Reflector']},
    {name: 'Yang', tpath: 'images/yang.png', spath: 'images/yangsel.png', supers: ['SAI: Raishin Mahhaken', 'SAII: Tenshin Senkyutai', 'SAIII: Seiei Enbu']},
    {name: 'Yun', tpath: 'images/yun.png', spath: 'images/yunsel.png', supers: ['SAI: You Hou', 'SAII: Sourai Rengeki', 'SAIII: Genei Jin']}
];

document.addEventListener('click', () => {
    visualize();
  });

function disableClick(event){
    event.preventDefault();
    event.stopPropagation();
};

function resetClick(){
    document.body.style.cursor = 'default';
    document.removeEventListener('click', disableClick, true);

};

const visualize = function visualize(){
    document.addEventListener('click', disableClick, true);
    document.body.style.cursor = 'not-allowed';
    let i = 0;
    while ( i < 75){
        setTimeout(function() {
            randomate();
        },i*i*1.5);
        i++;
    }
    setTimeout(function(){
        clickaud.play();
    },8000);
    setTimeout(function(){
        setSelArt();
    },9000);
    setTimeout(function(){
        resetClick();
    },12000);
};

const randomate = function randomate(){
    shutaud.play();
    ran1index = Math.floor(Math.random() * charSrcs.length)
    sup1index = Math.floor(Math.random() * 3)
    ran2index = Math.floor(Math.random() * charSrcs.length)
    sup2index = Math.floor(Math.random() * 3)

    p1char.src = charSrcs[ran1index].tpath
    p1name.textContent = charSrcs[ran1index].name
    p1super.textContent = charSrcs[ran1index].supers[sup1index]
    p2char.src = charSrcs[ran2index].tpath
    p2name.textContent = charSrcs[ran2index].name
    p2super.textContent = charSrcs[ran2index].supers[sup2index]
};

const setSelArt = function setSelArt(){
    ran1index = Math.floor(Math.random() * charSrcs.length)
    sup1index = Math.floor(Math.random() * 3)
    ran2index = Math.floor(Math.random() * charSrcs.length)
    sup2index = Math.floor(Math.random() * 3)

    p1char.src = charSrcs[ran1index].spath
    p1name.textContent = charSrcs[ran1index].name
    p1super.textContent = charSrcs[ran1index].supers[sup1index]
    p2char.src = charSrcs[ran2index].spath
    p2name.textContent = charSrcs[ran2index].name
    p2super.textContent = charSrcs[ran2index].supers[sup2index]
    yeoaud.play();
};