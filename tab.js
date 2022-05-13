//グローバス汚染を防ぐために即時関数を設置
(() => {

//ここに命令を書く
const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');
const ACTIVE_CLASS = 'is-active';
const navLen = $nav.length

//初期化
const init = () => {
  $content[0].style.display = 'block';
};
init();

//クリックしたら起こるイベント
const handleClick = (e) => {
  //①linkデフォルト設定を無効化
  e.preventDefault();

  //②クリックされたnavとそのdataを取得
  const $this = e.target;
  const targetValue = $this.dataset.nav;

  //③対象外のnav,contentを一旦リセットする
  let index = 0;
  while(index < navLen){
    $content[index].style.display = 'none';
    $nav[index].classList.remove(ACTIVE_CLASS)
    index ++;
  };

  //④対象のコンテンツをアクティブ化する(contentを表示・色を変化)
  $tab.querySelectorAll('[data-content= "'+ targetValue +'"]')[0].style.display = 'block';
  $nav[targetValue].classList.add(ACTIVE_CLASS);


  console.log($this);
};



//全nav要素に対して関数を適応。発火
let index = 0;
while (index < navLen) {
  $nav[index].addEventListener('click',(e) => {
  handleClick(e);
  });
  index++;
};


})();
