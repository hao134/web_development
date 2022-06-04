# app.js and list.ejs logic flow 
1. 首先回傳kindOfDay在list.ejs上顯示時間
2. 在list.ejs 建立一個post form input回傳新增的item，並在app.js 設立一個變數接住
3. 接住後的變數是單變數，此時有個問題，就是更新頁面時會將剛剛新增的變數洗掉
4. 因此這時將變數改為array，這樣子就不會因為更新頁面被洗掉變數了

* 要注意 app get 和 post 最後
* get 回傳兩個變數過去 list 其中 kindOfDay 很簡單就是時間丟過去list那而已
* 另一個 newListItems 就比較複雜，在get 就要設置原因為當運行時，list會因為接不到變數，
* 而發生錯誤，因此在get就要設置變數，而app post則是接收新增的item變數將它append 到
* array 中並redirect到初始頁面，此時就會將畫面更新到有新增item的樣子了，這裡有點複雜，是此程式的重點。

# Ejs class end, 2022.6.4
1. 要將css納入的方法為，創立一個public 資料夾 並在主js檔中加入 app.use(express.static("public"))；在要引用css檔案的ejs檔加入<link rel="stylesheet" href="css/styles.css">，表示css檔案在public/css/styles.css

2. 在list.ejs中透過將button命名為list並透過按下button傳值（值為html頁面的名字）來傳送新增的值為何種類型，因而決定要在普通的todolist增加抑或是工作頁面中增加，這樣的分別方法可透過button的傳值在app.js約26~36中實現，這方法很重要，要好好看。

3. 繼承html，不同的html能夠繼承相同的起始或結尾html，只要加入<%- include("filename") -%>在頭或尾就可以

4. 可將一個較大的js檔切成許多小的module，關於如何產生module或是如何引用module，在app.js的前面（如何引用module)和新分割出的module date.js都寫的很清楚，其中date.js上下半是類似的function，只是上面是簡寫的形式。

5. 總之可看出大略步驟為，先寫出各種功能，美醜先不管，再來細調到介面滿意，最後則是簡化程式碼。

