'use strict'

const MSButton = document.getElementById('MysteryBlend'); //ボタン
const resultDivided = document.getElementById('result'); //結果出力
const jenreResultDivided = document.getElementById('genre'); //ジャンル格納
const varietyResultDivided = document.getElementById('variety'); //曲構成格納
const noneSecResultDivided = document.getElementById('noneSec'); //ノンセクション格納
const tweetDivided = document.getElementById('tweet-area'); //ツイートエリア

//ボタンが押されたとき実行
MSButton.onclick = function(){
    //初期化
    resultDivided.innerText = '';
    jenreResultDivided.innerText = '';
    varietyResultDivided.innerText = '';
    noneSecResultDivided.innerText = '';

    //結果表示の作成
    const headResult = document.createElement('h2'); //createElementで<h2></h2>のようなタグだけを先に作成する
    headResult.innerText = '【結果】'; //innerTextでタグの中身を設定
    resultDivided.appendChild(headResult); //appendChildでdiv要素を親として、そこに子要素として追加する

    //ジャンルの作成
    const h3_1 = document.createElement('h3');
    h3_1.innerText = '・ジャンル';
    jenreResultDivided.appendChild(h3_1);

    const p1 = document.createElement('p'); 
    const jResult = returnJenre();
    p1.innerText = jResult; 
    jenreResultDivided.appendChild(p1); 

    //曲構成の作成
    const h3_2 = document.createElement('h3');
    h3_2.innerText = '・曲構成';
    varietyResultDivided.appendChild(h3_2);

    const p2 = document.createElement('p'); 
    const vResult = returnVariety();
    p2.innerText = vResult; 
    varietyResultDivided.appendChild(p2); 

    //ノンセクションの作成
    const h3_3 = document.createElement('h3');
    h3_3.innerText = '・ノンセクション';
    noneSecResultDivided.appendChild(h3_3);

    const p3 = document.createElement('p'); 
    const nResult = returnNoneSec();
    p3.innerText = nResult; 
    noneSecResultDivided.appendChild(p3); 


    //Twitter投稿機能
    tweetDivided.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue = 
            'https://twitter.com/intent/tweet?button_hashtag=MysteryBlendシミュレーター&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');

    //結果をtweetに表示
    anchor.setAttribute('data-text', 'ジャンル: ' + jResult 
                                   + '\n曲構成: ' + vResult 
                                   + '\nノンセクション: ' + nResult 
                                   + '\n'
                                   + 'https://ueno-8-ueno.github.io/MysteryBlend-Simulator/MysteryBlend.html'
                                   + '\n\n');

    anchor.innerText = 'Tweet #MysteryBlendシミュレーター';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

};
//ボタンイベント終了


//ジャンルリスト
const jenreList = [
    'ハードコアテクノ','ガバ','ハッピーハードコア','トランス','UKハードコア',
    'スピードコア','フレンチコア','ハードテック','ハードスタイル','ダブステップ',
    'フューチャーベース','ハウス','ドラムンベース','メタル','ハードルネッサンス',
    '世紀末コア','ユーロビート','SUPER ULTIMATE HYPER CORE','アートコア','カラーベース',
    '演歌(風)','ハイテックフルオン'
];

//曲構成リスト
const varietyList = [
    'BPM変化','変拍子','4つ打ち','3拍子','キック32分多用',
    'BPM150未満','一部BPM倍取り','フェイクドロップ','転調','急展開',
    '1分以内','王道進行'
];

//ノンセクションリスト
const noneSecList = [
    'やたら壮大な雰囲気','Kawaii','Wobble','レクイエム','和風',
    'カレー','メインリード：スパソ','声ネタ','萌え','発狂地帯',
    'セクシー','ゴシック/クラシック','叫び声','夏','冬',
    'サイケデリック','ギター','コーラス','チップチューンサウンド','デカいドロップ',
    'リミックス','逆再生','ハロウィン','クリスマス','爽やか',
    '激重キック','神','不気味','短調','長調',
];

//ランダムにジャンルを返す関数
function returnJenre(){
    const jenre = Math.floor( Math.random() * jenreList.length ); //ジャンルをランダム選出
    const result = jenreList[jenre];
    return result;
}

//ランダムに曲構成を返す関数
function returnVariety(){
    const variety = Math.floor( Math.random() * varietyList.length ); //ジャンルをランダム選出
    const result = varietyList[variety];
    return result;
}

//ランダムにノンセクションを返す関数
function returnNoneSec(){
    const noneSec = Math.floor( Math.random() * noneSecList.length ); //ジャンルをランダム選出
    const result = noneSecList[noneSec];
    return result;
}
