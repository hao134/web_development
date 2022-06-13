# EJS TODOLIST

和第二節中 EJS 介紹的 todolist 大同小異，只是以往用 array 來存資料，這次用 mongodb 來存

- 一開始要先連接 mongodb

```javascript=
const mongoose = require("mongoose");

//Connects MongoDB Server and Creates DB
mongoose.connect("mongodb://localhost:27017/todolistDB");
console.log("Successfully connected to database");

```

- Define Schema

```javascript=
//Define itemsSchema
const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
// use Schema to Create Model
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});
const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});
const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);
```

- 在主頁定義一個 if else statement，假如 todolist 為空，則創立一個，否則直接讀取並顯示

```javascript=
app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});
```

- 客製化分頁，在 customlistname 輸入分頁名字，假如是第一次增加此 todolist，就會渲染出一個帶有基礎條列的 todolist 分頁，若非第一次，就會進入已創建的分頁

```javascript=
app.get("/:customListName", function (req, res) {
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        //Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        //Show an existing list
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

```

- post method
  上面的 ListSchema 就是為了在此創立的：

```javascript=
const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);
```

在主頁的 item 有自己的 itemschma，而在客製分頁就是存在 listschema

```javascript=
app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName,
  });
  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});
```
