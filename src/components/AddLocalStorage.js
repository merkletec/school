export function hotAddLocalstorage(e) {
  const item_id = Date.now()
  const itemsContent = e.target.parentNode.parentNode.previousSibling.querySelector('h2').innerHTML
  let task = {
    item_id: item_id,
    name: itemsContent,
    count: 1,
    price: 350,
  }
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  if (tasks) {
    // 若存在
    tasks.unshift(task)
  } else {
    // 若不存在
    tasks = [task]
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
  icon()
}
export function itemsAddLocalstorage(e) {
  const item_id = Date.now()
  const itemsContent = e.target.parentNode.querySelector('h2').innerHTML
  let task = {
    item_id: item_id,
    name: itemsContent,
    count: 1,
    price: 350,
  }
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  if (tasks) {
    // 若存在
    tasks.unshift(task)
  } else {
    // 若不存在
    tasks = [task]
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
  icon()
}
export function addLocalstorage(info) {
  const item_id = Date.now()
  if (info.count == 0) {
    alert('填入幾項商品')
  } else {
    let task = {
      item_id: item_id,
      name: info.name,
      count: info.count,
      price: info.price,
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      // 若存在
      tasks.unshift(task)
    } else {
      // 若不存在
      tasks = [task]
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    icon()
  }
}

export function icon() {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'))
  let list
  const shopCount = document.getElementsByClassName('shopCount')[0]
  const mobileCount = document.getElementsByClassName('mobileshopCount')[0]
  if (tasks == null) {
    let list = 0
    shopCount.innerHTML = list
    mobileCount.innerHTML = list
  } else {
    let list = tasks.length
    shopCount.innerHTML = list
    mobileCount.innerHTML = list
  }
  // const mobileshopCount = document.getElementsByClassName('mobileshopCount')[0]
  // mobileshopCount.innerHTML = list
}
