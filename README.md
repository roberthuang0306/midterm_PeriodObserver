# WebProgrammingMidterm -- Period Observer #

---------------------------------------------------------------------------------
## 一句話描述這個 project 在做什麼 ##
---------------------------------------------------------------------------------

>    可以根據輸入的月經週期以及日期，推算出下一次的月經時間，以及安全期、危險期、排卵日。

---------------------------------------------------------------------------------
## (Optional) Deployed 連結 ##
---------------------------------------------------------------------------------

>    無

---------------------------------------------------------------------------------
## 使用/操作方式 ##
---------------------------------------------------------------------------------

Register : 
---
>1. 輸入你想註冊的帳號密碼，按下 'Log in / Register' (畫面跳轉至帳號初始化頁面)
>2. 輸入週期、持續時間，以及上次月經來潮的日期，並按下send （畫面跳轉至登入頁面）

Use :
---
>1. 用剛剛註冊的帳密登入 （畫面跳轉至使用者頁面）
>2. 假設下次月經已來潮，可以用右方的小日曆選擇本次來潮的日期，按下send可以即時更新。
<br>      (因為預設是月經來了才會按下send，所以左方日曆的日期還會在當下的日期，如果選擇的日期是遙遠的以後的話，左方的日曆可能要向右找一下，才能找到預測的時間)

Save/Clear :
---
>1. 按下Save會將目前的狀態更新至db
>2. 按下Clear會將整個帳號刪除

建議 :
---
>1. 使用chrome瀏覽器
>2. 全螢幕
> (對不起我css沒弄好)

---------------------------------------------------------------------------------
## 其他說明 ##
---------------------------------------------------------------------------------

>    註冊時，period代表月經的平均週期，duration代表月經一次的平均持續時間
<br> 下方的日曆是選擇上一次的月經日期（按第一下選擇起始日，第二下選擇結束日）
<br> 請輸入數字，不然會註冊失敗
<br> 拜託輸入正常的period跟duration...不然那個畫面會看起來很怪（對不起我還沒做好防呆機制...嗚嗚）
<br> （ 一定會有人給我亂輸入...
-----
>    月經週期計算 :
<br> 排卵期 : 下次月經起始日的前14天。
<br> 危險期 : 排卵日的前五天～排卵日後四天。
<br> 經期預測 : 我只會取平均啦......
<br> 安全期 : 其餘都是安全期，但是還是要做防護措施

---------------------------------------------------------------------------------
## 使用與參考之框架/模組/原始碼 ##
---------------------------------------------------------------------------------

react-big-scheduler :
---
>https://reactjsexample.com/a-scheduler-and-resource-planning-component-built-for-react/

react-day-picker :
---
>https://react-day-picker.js.org

css :
---
>https://html5up.net/dimension

Node.js
---

Express.js
---

Babel
---

Webpack
---

Mongodb
---

---------------------------------------------------------------------------------

---------------------------------------------------------------------------------
## 我的貢獻 ##
---------------------------------------------------------------------------------

>    登入頁面，以及登入的機制、將前端後端資料庫串連、頁面中的儲刪除機制，即時更新預測結果。
<br>  簡單來說...除了那兩個日曆以及css檔案之外的其他部分。

---------------------------------------------------------------------------------
## 心得 ##
---------------------------------------------------------------------------------

>以前健康課都在睡覺，對於女性的月經週期計算相當不了解，經過這次的project，希望對女生的生理週期有更大的認識<br>
coding部分，打完發現最難的是cssＸＤ，果然美感不是電機系的專長ＸＤ<br>
>未來希望可以將一些輸入的地方做強化，比如密碼的長度，規範等等（大概又要像資結一樣刻parser了)<br>  
這一次的作業其實大部分時間都在了解其他人的code，也讓我知道，使用現成的資源的重要性，我們不可能全部都自己硬幹出來，利用前人的資源，才能事半功倍。

