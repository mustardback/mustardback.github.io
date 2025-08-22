
const p1char = document.getElementById('p1')
const p2char = document.getElementById('p2')
const p1name = document.getElementById('n1')
const p2name = document.getElementById('n2')
const p1super = document.getElementById('s1')
const p2super = document.getElementById('s2')

const charSrcs = [
    {name: 'Gouki', path: 'images/akuma.png', supers: ['SAI: Messatsu Gou Hadou', 'SAII: Messatsu Gou Shoryu', 'SAIII: Messatsu Gou Rasen']},
    {name: 'Alex', path: 'images/alex.png', supers: ['SAI: Hyper Bomb', 'SAII: Boomerang Raid', 'SAIII: Stun Gun Headbutt']},
    {name: 'Chun-Li', path: 'images/chunny.png', supers: ['SAI: Kiko Sho', 'SAII: Houyoku Sen', 'SAIII: Tensei Ranka']},
    {name: 'Dudley', path: 'images/dudley.png', supers: ['SAI: Rocket Uppercut', 'SAII: Rolling Thunder', 'SAIII: Corkscrew Blow']},
    {name: 'Elena', path: 'images/elena.png', supers: ['SAI: Spinning Beat', 'SAII: Brave Dance', 'SAIII: Healing']},
    {name: 'Hugo', path: 'images/hugo.png', supers: ['SAI: Gigas Breaker', 'SAII: Megaton Press', 'SAIII: Hammer Mountain']},
    {name: 'Ibuki', path: 'images/ibuki.png', supers: ['SAI: Kasumi Suzaku', 'SAII: Yoroi Doushi', 'SAIII: Yami Shigure']},
    {name: 'Ken', path: 'images/ken.png', supers: ['SAI: Shoryu Reppa', 'SAII: Shinryu Ken', 'SAIII: Shippu Jinrai Kyaku']},
    {name: 'Makoto', path: 'images/makoto.png', supers: ['SAI: Seichusen Godanzuki', 'SAII: Abare Tosanami', 'SAIII: Tanden Renki']},
    {name: 'Necro', path: 'images/necro.png', supers: ['SAI: Electric Storm', 'SAII: Slam Dance', 'SAIII: Electric Snake']},
    {name: 'Oro', path: 'images/oro.png', supers: ['SAI: Kishin Riki', 'SAII: Yagyou Dama', 'SAIII: Tengu Stone']},
    {name: 'Q', path: 'images/q.png', supers: ['SAI: Critical Combo Attack', 'SAII: Deadly Double Combination', 'SAIII: Total Destruction']},
    {name: 'Remy', path: 'images/remy.png', supers: ['SAI: Light of Justice', 'SAII: Supreme Rising Rage', 'SAIII: Blue Nocturne']},
    {name: 'Ryu', path: 'images/ryu.png', supers: ['SAI: Shinku Hadoken', 'SAII: Shin Shoryuken', 'SAIII: Denjin Hadoken']},
    {name: 'Sean', path: 'images/sean.png', supers: ['SAI: Hadou Burst', 'SAII: Hyper Tornado', 'SAIII: Shoryu Canon']},
    {name: 'Twelve', path: 'images/twelve.png', supers: ['SAI: X.N.D.L.', 'SAII: X.F.L.A.T.', 'SAIII: X.C.O.P.Y.']},
    {name: 'Urien', path: 'images/urien.png', supers: ['SAI: Tyrant Slaughter', 'SAII: Temporal Thunder', 'SAIII: Aegis Reflector']},
    {name: 'Yang', path: 'images/yang.png', supers: ['SAI: Raishin Mahhaken', 'SAII: Tenshin Senkyutai', 'SAIII: Seiei Enbu']},
    {name: 'Yun', path: 'images/yun.png', supers: ['SAI: You Hou', 'SAII: Sourai Rengeki', 'SAIII: Genei Jin']}
]
;

document.addEventListener('click', () => {
    ran1index = Math.floor(Math.random() * charSrcs.length)
    sup1index = Math.floor(Math.random() * 3)
    ran2index = Math.floor(Math.random() * charSrcs.length)
    sup2index = Math.floor(Math.random() * 3)

    p1char.src = charSrcs[ran1index].path
    p1name.innerHTML = charSrcs[ran1index].name
    p1super.innerHTML = charSrcs[ran1index].supers[sup1index]
    p2char.src = charSrcs[ran2index].path
    p2name.innerHTML = charSrcs[ran2index].name
    p2super.innerHTML = charSrcs[ran2index].supers[sup2index]
  });