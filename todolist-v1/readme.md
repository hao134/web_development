# app.js and list.ejs logic flow (without using scope)
1. 首先回傳kindOfDay在list.ejs上顯示時間
2. 在list.ejs 建立一個post form input回傳新增的item，並在app.js 設立一個變數接住
3. 接住後的變數是單變數，此時有個問題，就是更新頁面時會將剛剛新增的變數洗掉
4. 因此這時將變數改為array，這樣子就不會因為更新頁面被洗掉變數了

* 要注意 app get 和 post 最後
* get 回傳兩個變數過去 list 其中 kindOfDay 很簡單就是時間丟過去list那而已
* 另一個 newListItems 就比較複雜，在get 就要設置原因為當運行時，list會因為接不到變數，
* 而發生錯誤，因此在get就要設置變數，而app post則是接收新增的item變數將它append 到
* array 中並redirect到初始頁面，此時就會將畫面更新到有新增item的樣子了，這裡有點複雜，是此程式的重點。
