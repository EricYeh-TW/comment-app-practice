# 留言板練習

## Task List

### task1

- [x] 新建 components、四個檔案 CommentApp、CommentInput、CommentList、Comment
- [x] 修改 CommentApp 納入 Input、List
- [x] Input、List 各放一段文字
- [x] 修改 App 樣式

### task2

- [x] 修改 Input 結構與樣式
- [x] 新增 username、content 狀態
- [x] 監聽 onChange 並且處理讓文字內容顯現
- [x] 傳遞資料給父組件，建立 onSubmit 方法並且讓父組件的 handleSubmit 可以 log 資料
- [x] submit 完內容欄要清空，username 不用

### task3

- [ ] 修改 List 結構，並建立假留言陣列，傳給 Comment
- [ ] 修改 Comment 結構，讓他正常渲染留言
- [ ] 刪除測試數據，改由 App 傳進來的數據
- [ ] List 建立留言的 defaultProps
- [ ] 修改 App 的 handleSubmit 讓他可以按下後顯示留言
- [ ] 加入檢查如果有欄位沒輸入就跳 alert

### task4

- [ ] Input 建立\_saveUserName、\_loadUserName 方法
- [ ] username 儲存至 localStorage
- [ ] 從這裡開始每個組件之間傳遞數據都需要加上 PropsType 檢查

### task5

- [ ] App 建立\_saveComments、\_loadComments 方法
- [ ] 留言儲存至 localStorage
- [ ] 顯示評論發布的時間，submit 時多帶一個時間戳
- [ ] Comment 新增 timeString 狀態並且新增\_updateTimeString 方法五秒更新一次

### task6

- [ ] Comment 新增刪除按鈕
- [ ] Comment 新增 handleDeleteComment 方法將被刪除的留言的 index 傳給 List
- [ ] 修改 List 傳給 Comment 的數據，新增 onDeleteComment 與 index 傳給 Comment
- [ ] List 新增 handleDeleteComment 方法繼續將被刪除留言的 index 帶給 App
- [ ] App 新增 handleDeleteComment 方法並且能夠 log 出被刪除留言的 index
- [ ] 修改 App 的 handleDeleteComment 並且使用 splice()刪除留言，將改變儲存至 localStorage
- [ ] Comment 新增 commentWillUnmount 來停止已銷毀留言的計時

### task7

- [ ] 新增 reducers、containers 資料夾、新建 comment.js
- [ ] 引入 Redux react-redux
- [ ] 建立 reducer、action type、action creator

### task8

- [ ] 依是否依賴 localStorage 來區分 dumb、smart 組件，將 dumb 組件放到 components 資料夾
- [ ] 將 Input 中關於 localStorage 的代碼重構，將邏輯全部改由 props 取的數據
- [ ]

### task9

- [ ] 針對 Input、List 新建 smart 的 container
- [ ] 將載入留言、保存留言和刪除留言的邏輯從 App 移至 ListContainer，並且將它與 store connect，傳遞數據給 List
- [ ] 將載入保存 username 的邏輯移至 InputContainer，並且將它與 store connect，傳遞數據給 Input
- [ ] 將 App 移動到 container 資料夾，並且引入兩個 smart 組件
- [ ] 修改 Index，建立 redux 的 store，並使用 Provider 將數據傳下去
