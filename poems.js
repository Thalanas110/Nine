class Poem {
    constructor(id, title, author, text) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.text = text;
    }
}

const poems = [
    {
      id: 1,
      title: "When We First Met",
      author: "Ian Lawrence",
      text: "The world grew quiet when you came,\nAs if it whispered out your name.\nThe air stood still, my heart took flight,\nIn that soft and golden light.\n\nYour eyes met mine, a spark, a start,\nA ripple danced across my heart.\nTime slowed down, I held my breath,\nAfraid to wake what beauty left.\n\nYour laugh—a melody so sweet,\nMade my pulse skip and then repeat.\nYour presence wrapped me in a glow,\nThat only heaven’s touch could know.\n\nYou smiled, and stars fell from the skies,\nI saw the future in your eyes.\nI never thought I'd feel this way,\nBut now I hope you’ll always stay.\n\nFrom that moment, truth I knew,\nMy world began and ends with you.\nIt all began, our love, our thread,\nThe moment when we first had met."
    },
    {
      "id": 2,
      "title": "Sa Ilalim ng Banayad na Buwan",
      "author": "Ian Lawrence",
      "text": "Tahimik ang gabi’t kalangitan,\nMay lihim sa hangin na ‘di mabigyan ng ngalan.\nKislap ng bituin, tila kumikindat,\nHabang pinagmamasdan ka mula sa ‘di kalayuan.\nMay musika sa pagitan ng ating katahimikan.\n\nAng bawat galaw mo’y isang pintig,\nSa pusong matagal nang payapa’t tahimik.\nHindi mo kailangang magsalita pa,\nSapat na ang presensya mo sa bawat gising.\nKahit anino mo’y tila panaginip.\n\nSa bawat hakbang mong hindi sinasadya,\nParang may alon sa damdaming walang takda.\nHindi ito bulaklak na inaalay,\nKundi bugso ng pagkamangha na ‘di kayang ipaliwanag.\nPilit ikinukubli sa pagitan ng mga tula.\n\n‘Pag ikaw ay nariyan, tila bumabagal ang oras,\nAt ang paligid ay nawawalan ng lakas.\nNgunit ika’y nananatiling malinaw,\nParang silahis ng araw sa dapithapon.\nIsang alaala na ‘di agad malilimutan.\n\nKaya sa bawat gabing dumarating,\nInaabangan ko ang iyong tahimik na pagdating.\nHindi upang ika’y pagmasdan ng harapan,\nKundi upang maramdaman muli ang pakiramdam,\nNa sa mundong ito—may saysay ang katahimikan."
    },
    {
      id: 3,
      title: "I Miss Youu Soo Much",
      author: "Ian Lawrence",
      text: "The nights are cold without your touch,\nI ache because I miss you much.\nYour laugh, your scent, your gentle face,\nNo one else could take your place.\n\nThe pillow knows my silent cries,\nYour name still whispered through the skies.\nEach day feels like a ghostly maze,\nWhere light is lost in heavy haze.\n\nI count the hours, then count again,\nA prisoner of aching pain.\nYour photo brings a fleeting cheer,\nBut oh, how much I want you near.\n\nI miss your warmth, your sweet embrace,\nThe way you made my heart keep pace.\nThe little talks, the long goodnights,\nNow only echoes in the night.\n\nSo till we meet and time is kind,\nI'll hold you deep inside my mind.\nI miss youu soo much—too true,\nEvery second, I long for you."
    },
    {
      id: 4,
      title: "Sana'y Makita Ka Na Muli",
      author: "Ian Lawrence",
      text: "Sa bawat araw na lumilipas,\nIkaw ang tanong sa bawat oras.\nLaging laman ng aking panaginip,\nSana'y makita kang muli sa isang saglit.\n\nHindi na sapat ang litrato mong tinititigan,\nNi ang mga alaala nating masdan.\nAng puso ko'y nag-aalab sa pananabik,\nSa iyong ngiti't haplos, ako'y nananabik.\n\nDumarating ang gabi, puso'y nangungulila,\nSa mga mata mong kay lambing tumitig sa akin sinta.\nAng oras tila mabagal kung wala ka,\nAt bawat segundo, tila isang tala.\n\nSana'y bumalik na ang araw ng pagyakap,\nMga titig mong kay init, akin nang malaplap.\nDi ko na kayang humaba pa ang paghihintay,\nIkaw ang nais kong makasama sa bawat araw.\n\nSana'y makita ka na muli, mahal kong giliw,\nUpang muling damhin ang tamis ng iyong aliw.\nPagkat sa piling mo'y payapa ang lahat,\nAt sa muling pagkikita, doon tayo'y liligaya nang sapat."
    },
    {
      id: 5,
      title: "A Future Together",
      author: "Ian Lawrence",
      text: "I dream of mornings by your side,\nOf coffee shared, of time and tide.\nA home of love where peace resides,\nAnd laughter echoes far and wide.\n\nA garden where our children play,\nA porch where we can watch the day.\nWith wrinkled hands, still intertwined,\nTwo hearts that time could not unbind.\n\nWe'll build a life not just of gold,\nBut one with stories to be told.\nThrough storms and sunshine, loss and gain,\nTogether, we will dance through pain.\n\nYour dreams, my love, will be my map,\nAnd mine, you'll guard within your clasp.\nTogether, not just hand in hand,\nBut soul with soul, across the land.\n\nSo here I stand, in hope and prayer,\nFor all our days and love to share.\nA future where we both will be,\nForevermore, just you and me."
    },
    {
      id: 6,
      title: "Gitna ng Kawalan",
      author: "Ian Lawrence",
      text: "Sa ilalim ng mga bituin, tayo'y magkatabi,\nSa init ng bonfire, puso'y mapayapa't mithi.\nAng gabi'y saksi sa ating mga tawa,\nHabang ang lamig ay di natin alintana.\n\nMay tinig ng kuliglig, huni ng gubat,\nHabang ikaw ay yakap ko sa gitna ng dilim na tapat.\nAng ating mga mata'y nagtagpo sa liwanag,\nWaring walang ibang mundo kundi ating galak.\n\nHabang binubulong ko ang pangako't ligaya,\nAng puso ko'y tumitibok para lang sa 'yo, sinta.\nAng bawat hinga mo'y musika sa akin,\nSa gabi ng camping, damhin mo ang hangin.\n\nAng oras ay tila huminto sa ating tabi,\nHabang sabay nating minamasdan ang langit na abot-tanaw.\nKahit wala tayong luho o magarang tahanan,\nSapat na ang yakap mo't ang init ng ating pagmamahalan.\n\nKaya't sana'y marami pang gabing ganito,\nNa tayo'y magkasama sa ilalim ng mga bituin at buwan.\nAng gabi'y di na nakakatakot kapag may kasama ka,\nSa gabi ng camping, ikaw ang tahanan ko talaga."
    },
    {
      id: 7,
      title: "Challenges but Together",
      author: "Ian Lawrence",
      text: "The storms may rage and skies may fall,\nBut still we stand through it all.\nWhen winds arise to shake our core,\nWe hold each other, stronger than before.\n\nThe path ahead may twist and turn,\nAnd hearts at times may ache and burn.\nYet hand in hand, we fight, we try,\nWe wipe each tear, we never say goodbye.\n\nWe've cried in silence, laughed in pain,\nBut from the ashes, we love again.\nFor every trial makes us true,\nEach one survived—because of you.\n\nWhen doubt arrives like evening rain,\nWe shelter under love's refrain.\nTogether, nothing breaks our stride,\nYou are my strength, my heart, my guide.\n\nSo let the world throw what it may,\nWe'll face it all, come night or day.\nFor battles come and battles go,\nBut love remains—the flame we know."
    },
    {
      id: 8,
      title: "Ang Lambing ng Iyong Labi",
      author: "Ian Lawrence",
      text: "Ang labi mong kay lambing dumikit sa akin,\nTila apoy na di nasasaktan kundi pinapainit ang damdamin.\nSa bawat halik mong puno ng pag-ibig,\nAng mundo ko'y tila lumilipad sa langit.\n\nDi ko malimutan ang unang dampi,\nParang himig na sa puso'y umaawit.\nAng tibok ng dibdib ko'y bumibilis,\nSa bawat halik mong kay tamis.\n\nAng gabi'y lumalalim ngunit di ako natatakot,\nPagkat ang mga labi mo'y aking sagot.\nLahat ng tanong ay nawawala,\nKapag yakap ko'y may halik mong kasama.\n\nSa katahimikan, ang labi mo'y bulong,\nNa nagsasabing ako'y di mo iiwan kailanman.\nTila sining ang bawat galaw ng labi mo,\nNa nagpipinta ng pag-ibig sa puso ko.\n\nO, sana'y di matapos ang sandaling ito,\nNa ang lambing ng iyong labi'y akin pang matikman.\nPagkat sa isang halik mo pa lang,\nAlam kong pag-ibig natin ay tunay at wagas."
    },
    {
      id: 9,
      title: "Cuddles With Youu",
      author: "Ian Lawrence",
      text: "Wrapped in your arms, the world fades away,\nLike stars that sleep till break of day.\nYour heartbeat hums a lullaby,\nAs time drifts by with a gentle sigh.\n\nThe warmth of you against my chest,\nMakes every worry come to rest.\nEach cuddle is a sacred prayer,\nThat life is better when you're there.\n\nNo fancy words, no grand parade,\nJust us beneath a blanket laid.\nYour fingers tangled into mine,\nLike ivy vines that love to climb.\n\nThe rain can fall, the winds may blow,\nBut in your arms, I’m safe, I know.\nFor love is found in simple grace,\nIn every cuddle, in your embrace.\n\nSo let the night be long and true,\nAs long as I’m curled up with youu.\nIn cuddles, love becomes so clear—\nForever's found whenever you're near."
    },
    {
      id: 10,
      title: "Sapat Ka Na",
      author: "Ian Lawrence",
      text: "Hindi mo kailangang maging perpekto,\nPara sa 'kin, ikaw na ang mundo.\nSa bawat pagkukulang mong nakikita,\nAy sagot ng puso kong laging umaasa.\n\nSapat ka na sa isang tulad ko,\nNa sa bawat titig mo'y kumpleto na ang mundo.\nHindi ko hanap ang yaman o karangyaan,\nAng kailangan ko lang ay ikaw na tapat at tunay.\n\nSa bawat galaw, damhin mo sana,\nAng pagmamahal na hindi ka iiwan sa gitna ng problema.\nSa iyo'y walang kulang, walang sobra,\nPag-ibig mo'y sapat na, higit pa sa inaakala.\n\nWalang ibang nais kundi ikaw lang,\nAng yakap mo'y tahanan sa gabing walang ilaw.\nKahit ang mundo'y baligtarin pa,\nAko'y masaya basta't ikaw ay kasama.\n\nSapat ka na—ikaw lang, wala nang iba,\nTulad ng araw sa langit, ikaw ang liwanag sa aking gabi.\nMahal kita sa buong puso ko,\nAt palaging ikaw lang ang gusto kong makasama sa dulo."
    },
    {
      id: 11,
      title: "On The Altar",
      author: "Ian Lawrence",
      text: "The aisle is long, the crowd is still,\nMy heart obeys a higher will.\nI see you there, in heaven’s light,\nA vision pure, a dream so right.\n\nEach step I take, your gaze meets mine,\nA silent vow beyond all time.\nThe altar waits, our hands unite,\nIn sacred fire, love takes flight.\n\nThe priest begins, the angels cheer,\nThe past fades out, the now is here.\nI speak your name, my voice won't shake,\nFor every word is truth I make.\n\nWith ring and vow, I give my soul,\nTo walk with you as seasons roll.\nThrough thick and thin, through rise and fall,\nTo choose you still, through it all.\n\nAnd when they say “You may now kiss,”\nMy heart explodes in timeless bliss.\nFor there before our friends and sky,\nWe sealed a love that cannot die."
    },
    {
      id: 12,
      title: "Palangga Taka",
      author: "Ian Lawrence",
      text: "Sa kada adlaw nga ikaw ang akon huna-huna,\nNagapaniklop ang langit, nagahilum ang duta.\nAng tingog mo, kaanindot pamatian,\nPalangga taka—tunay kag wala sang katumbas nga kahulugan.\n\nBiskan layo ka, ang buot ko ara sa imo,\nBiskan wala ka, ginapanumdum ko gihapon ang aton duo.\nSa mata mo, nakita ko ang kadalag-an,\nSa dughan ko, ikaw ang akon kalinungan.\n\nLipay ako bisan sa dyutay nga mga oras,\nNga makaupod ka bisan sa handum lang nga bukas.\nIndi ko man maambalan sa tagsa ka pulong,\nPero palangga taka—wala na 'ko sang iban pa nga ginahandong.\n\nSa imo ako nakita sang tinud-anay nga gugma,\nIsa ka ka regalo halin sa Ginoo nga wala sang kapantay.\nAng mga halok mo, ang pagpamati mo,\nNagahatag kabuhi sa akon adlaw nga maluya.\n\nBasta’t hibalu-a, bisan ano man matabo,\nAkon gid ikaw, kag indi 'ni mag-iba sang imo pagkahamtang.\nPalangga taka—sa diin ka man magkadto,\nAng gugma ko para sa imo, indi gid magpawong."
    }
];

export default poems;